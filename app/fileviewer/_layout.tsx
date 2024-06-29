import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const gviewSupportedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain',
    'application/rtf',
    'image/png',
    'image/jpeg',
    'image/gif',
];

export default function FileViewer() {
    const { mimetype = '', url = '' } = useLocalSearchParams<{ mimetype: string, url: string }>();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.webviewContainer}>
                <WebView
                    originWhitelist={['*']}
                    source={{
                        uri: gviewSupportedMimeTypes.includes(mimetype) ? `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(url)}` : url,
                    }}
                    style={styles.webview}
                    allowsInlineMediaPlayback={true}
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
