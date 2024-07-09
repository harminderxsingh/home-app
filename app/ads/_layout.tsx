import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgBlackBurger from '@/assets/images/blackBurgur.svg';

export default function Ads() {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };

    return (
        <GestureHandlerRootView style={{ height: "auto" }}>

            <View style={{height:"100%", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#E8E0D4", }}>
                <View>

                    <View style={[styles.outerGap, styles.flexWithBetween]}>
                        <Link href="/updates" >
                            <View style={styles.link}>
                                <SvgLeftArrow />
                            </View>
                        </Link>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={handleButtonClick} >
                                <SvgBlackBurger />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ backgroundColor: "rgba(0,0,0,0)", margin: 20 }}>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                            <Text style={[styles.title, styles.font24,]} >Ad page sample</Text>
                            <Text style={[styles.font18, { color: "rgba(121, 101, 101, 0.8)",textAlign:"center", marginTop: 29, marginBottom: 79 }]}>Template for our promotions...</Text>
                            <Text style={[styles.normal, { fontSize: 15, textAlign: "center", paddingHorizontal: 35 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <View >


                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 20 }}>
                    <Link href='/dashboard' style={styles.goButton}>
                        <Text>Great! Let’s start!</Text>
                    </Link>

                </View>

            </View>

        </GestureHandlerRootView>


    );
}
const styles = StyleSheet.create({
    normal: {
        color: "#595959",

    },
    addButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 14,
    },
    flexWithBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    outerGap: {
        marginTop: 50,
        marginHorizontal: 20
    },
    logo: {
        width: 40,
        height: 40,
    },

    link: {
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 5,
        borderRadius: 50,
    },

    fontWeight600: {
        textAlign: "center",
        fontWeight: "600",
    },
    goButton: {
        backgroundColor: '#DB416A',
        padding: 30,
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",

        width: "100%",
        borderRadius: 12,
        borderColor: "#61859B",
        borderWidth: 1,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,

    },
    button: {
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    btn: {
        width: "100%",
        paddingVertical: 18,
        paddingHorizontal: 21,
        backgroundColor: "#fff",
        borderRadius: 8,
        fontSize: 20,
        fontWeight: "600",
        flexDirection: "row",
        alignItems: 'flex-start',
        color: "#292828",
        marginBottom: 12,
    },
    heading: {
        fontSize: 14,
        color: "#595959",
        fontWeight: "600",
        paddingBottom: 15,
    },
    count: {
        fontSize: 10,
        paddingBottom: 10,
        color: "rgba(89, 89, 89, 0.5)",
        opacity: 50,
        fontWeight: "600",
    },
    colorWhite: {
        color: '#fff',
    },
    font24: {
        fontSize: 24,
    },
    font20: {
        fontSize: 20,
    },
    font18: {
        fontSize: 18,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        color: "#595959",
    },
});