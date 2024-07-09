import { Link } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { WebView } from 'react-native-webview';
import SvgLeftArrow from '@/assets/images/leftArrow.svg';


export default function ElectricBill() {



    return (
        <>
            <View >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 40, paddingBottom: 10, paddingHorizontal: 15, }}>
                    <Link href="/homedata" >
                        <View style={styles.link}>
                            <SvgLeftArrow />
                        </View>
                    </Link>
                    <Text style={styles.title}>Electric co</Text>
                    <Link href="/homedata" style={{ fontSize: 19, color: "#595959" }}>
                        <Text>X</Text>
                    </Link>
                </View>
            </View>
            <WebView
                source={{ uri: 'https://expo.dev' }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 18,
        color: "#595959",
    },
    link: {
        width: 30,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#DFDFDF',
        padding: 5,
        borderRadius: 50,
    },
    flexWithBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    outerGap: {
        marginVertical: 0,
        marginHorizontal: 20
    },

});
