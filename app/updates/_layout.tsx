import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgBlackBurger from '@/assets/images/blackBurgur.svg';
import SvgPinkDot from '@/assets/images/pinkdot.svg';
import { StatusBar } from "expo-status-bar";


export default function Updates() {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#D1D1D1"></StatusBar>

            <View style={{ flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgba(240, 240, 240, 1)", }}>
                <View >

                    <View style={[styles.outerGap, styles.flexWithBetween]}>
                        <Link href="/dashboard" >
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
                            <Text style={[styles.title, styles.font24,]} >Updates and news</Text>
                            <Text style={[styles.font14, { color: "rgba(121, 101, 101, 0.8)", marginTop: 12 }]}>You have 3 unread  updates</Text>
                            <View style={{ marginTop: 40, }}>
                                <Link href='/ads' style={[styles.btn,]} >
                                    <View style={{ flexDirection: "row" }} >
                                        <View style={{ marginTop: 5 }}>
                                            <SvgPinkDot />
                                        </View>
                                        <View style={{ paddingLeft: 20 }}>
                                            <Text style={styles.heading}>
                                                New Deals with bal dal electronics
                                            </Text>
                                            <Text style={styles.count}>
                                                12/04/2024
                                            </Text>
                                        </View>
                                    </View>
                                </Link>
                                <Link href='/ads' style={[styles.btn,]} >
                                    <View style={{ flexDirection: "row" }} >
                                        <View style={{ marginTop: 5 }}>
                                            <SvgPinkDot />
                                        </View>

                                        <View style={{ paddingLeft: 20 }}>
                                            <Text style={styles.heading}>
                                                Time to update your app                                            </Text>
                                            <Text style={styles.count}>
                                                12/04/2024
                                            </Text>
                                        </View>
                                    </View>
                                </Link>
                                <Link href='/ads' style={[styles.btn,]} >
                                    <View style={{ flexDirection: "row" }} >
                                        <View style={{ marginTop: 5 }}>
                                            <SvgPinkDot />
                                        </View>
                                        <View style={{ paddingLeft: 20 }}>
                                            <Text style={styles.heading}>
                                                Time to update your app                                            </Text>
                                            <Text style={styles.count}>
                                                12/04/2024
                                            </Text>
                                        </View>
                                    </View>
                                </Link>
                                <Link href='/ads' style={[styles.btn,]} >
                                    <View style={{ flexDirection: "row" }} >
                                        <View style={{ marginTop: 5 }}>
                                            <SvgPinkDot />
                                        </View>

                                        <View style={{ paddingLeft: 20 }}>
                                            <Text style={styles.heading}>
                                                Time to update your app                                            </Text>
                                            <Text style={styles.count}>
                                                12/04/2024
                                            </Text>
                                        </View>
                                    </View>
                                </Link>

                            </View>
                        </View>
                    </View>
                </View>


            </View>
        </GestureHandlerRootView>

    );
}
const styles = StyleSheet.create({

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
        marginHorizontal:20
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
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: "100%",
        paddingVertical: 18,
        paddingHorizontal: 21,
        backgroundColor: "#fff",
        borderRadius: 8,
        fontSize: 20,
        // fontWeight: 600,
        flexDirection: "row",
        alignItems: 'flex-start',
        color: "#292828",
        marginBottom: 12,
    },
    heading: {
        fontSize: 14,
        color: "#595959",
        // fontWeight: 600,
        paddingBottom: 15,
    },
    count: {
        fontSize: 10,
        paddingBottom: 10,
        color: "rgba(89, 89, 89, 0.5)",
        opacity: 50,
        // fontWeight: 600,
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
    font14: {
        fontSize: 14,
    },
    title: {
        textAlign: "left",
        fontSize: 24,
        color: "#595959",
    },
});