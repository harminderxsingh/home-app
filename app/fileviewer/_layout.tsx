import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

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

export default function FileViewer() {
    const { mimetype = '', url = '' } = useLocalSearchParams<{ mimetype: string, url: string }>();
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
    

    return (
        <View style={styles.container}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
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
});
