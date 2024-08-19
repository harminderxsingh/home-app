import React, { useRef, useState } from 'react';
import { View, StyleSheet, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Bookmark from '@/assets/images/bookmark.svg';
import Download from '@/assets/images/download.svg';
import Printer from '@/assets/images/printer.svg';
import Delete from '@/assets/images/delete.svg';
import ShareSvg from '@/assets/images/share.svg';
import Header from '../header/_layout';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Print from 'expo-print';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';
import { fileService } from '@/services/FileService';

const { extra } = Constants.expoConfig || {};

const gviewSupportedMimeTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.oasis.opendocument.text",
    "application/rtf",
    "text/plain",
    "text/html"
];

const printSupportedUriMimetypes = new Set([
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.ms-powerpoint'
]);

export default function FileViewer() {
    const router = useRouter()
    const { mimetype = '', url = '', id = '' } = useLocalSearchParams<{ mimetype: string, url: string, id: string }>();
    // const fileUri = FileSystem.documentDirectory + url.split('/').pop();
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const webViewRef = useRef<any>(null);

    const handleLoad = (e: any) => {
        const { title } = e.nativeEvent;
        console.log(title)
        // Check if the page is blank (or another condition you prefer)
        if (isFirstLoad && (!title || title === '') && gviewSupportedMimeTypes.includes(mimetype)) {
            setIsFirstLoad(false);
            webViewRef.current.reload();
        }
    };

    const getPrintOptionForMimetype = async (url, mimetype) => {
        if (printSupportedUriMimetypes.has(mimetype)) {
            return { uri: url };
        }
    
        if (mimetype.startsWith('image/')) {
            return {
                html: `<html><body style="margin: 0; padding: 0;">
                            <img src="${url}" style="width: 100vw;"/>
                       </body></html>`
            };
        }
    
        if (mimetype === 'text/plain') {
            const text = await (await fetch(url)).text();
            return {
                html: `<html><body><pre style="font-family: monospace;">${text}</pre></body></html>`
            };
        }
    
        console.warn('Unsupported file type for printing:', mimetype);
        return null;
    };

    const printFile = async () => {
        try {
            const printOption = await getPrintOptionForMimetype(url, mimetype);
            if (printOption) {
                await Print.printAsync(printOption);
            }
        } catch (error) {
            console.error('Error while printing:', error);
        }
    };

    const downloadFile = async () => {
        try {
            const downloadUrl = `${extra?.baseUrl}/file/download/${id}`;
            Linking.openURL(downloadUrl)

            // const { uri } = await FileSystem.downloadAsync(url, fileUri);
            // alert('File downloaded successfully!');
            // console.log('Downloaded file URI:', uri);
        } catch (error) {
            console.log('Error downloading file:', error);
            alert('Failed to download file.');
        }
    };

    const deleteFile = async () => {
        try {
            await fileService.fileDelete(id);
            router.back();
        } catch (error) {
            console.log('Error deleting file:', error);
            alert('Failed to download file.');
        }
    };

    const shareUrl = async () => {
        try {
            await Share.share({ url });
        } catch (error) {
            console.log('Error sharing URL:', error);
        }
    };


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Header isBack={true} />
            <View style={[styles.container]}>
                <StatusBar style="auto" />
                <View style={styles.webviewContainer}>
                    <WebView
                        ref={webViewRef}
                        originWhitelist={['*']}
                        source={{
                            uri: gviewSupportedMimeTypes.includes(mimetype) ? `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(url)}` : url,
                        }}
                        style={styles.webview}
                        allowsInlineMediaPlayback={true}
                        onLoad={handleLoad}
                    />
                </View>
                <View style={styles.actions}>
                    <Bookmark />
                    <Printer onPress={printFile} />
                    <Download onPress={downloadFile} />
                    <Delete onPress={deleteFile} />
                    <ShareSvg onPress={shareUrl} />
                </View>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    webview: {
        flex: 1,
    },
    webviewContainer: {
        flex: 1,
        alignSelf: 'stretch',
    },
    actions: {
        position: 'absolute',
        flexDirection: 'row',
        display: 'flex',
        bottom: 30,
        left: 25,
        right: 25,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: 'space-between',
    }
});
