import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, router } from "expo-router";
import Header from "../header/_layout";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import SvgUserIcon from '@/assets/images/userIcon.svg';
import SvgWarningIcon from '@/assets/images/warning-s.svg';
import SvgAttachmentIcon from '@/assets/images/attachment.svg';


export default function Chat() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GradientBackgroundComponent>
                <Header />

                <View style={{ flexDirection: "column", height: "85%", backgroundColor: "#F7F7F7", marginHorizontal: 20, borderTopEndRadius: 20, borderTopLeftRadius: 20, padding: 20 }}>
                    <ScrollView >
                        <View>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ position: "relative", marginRight: 6 }}>
                                            <SvgUserIcon />
                                            <View style={styles.online}></View>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16, color: "#0D172A" }}>Sienna</Text>
                                            <Text style={{ fontSize: 10, color: "#3EA95D" }}>Available</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <SvgWarningIcon />
                                    </View>
                                </View>


                            </View>

                            <View style={{ position: "relative" }}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.leftMessage}>Good morning, Anna, how can I help you?</Text>

                                </View>
                                <View style={[styles.leftContainer]}>
                                    <View style={[styles.leftMessage]}>
                                        <Text>
                                            Select option:
                                        </Text>
                                        <Text style={styles.options}>1 - Book maintenance</Text>
                                        <Text style={styles.options}>2 - I got a problem…</Text>

                                        <Text style={styles.options}>3 - Contact Billion Bricks</Text>

                                        <Text style={styles.options}>4 - Write a feedback</Text>
                                        <Text style={styles.options}>5 - Other issue</Text>


                                    </View>

                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                    <Text style={styles.rightMessage}>1 - Book maintenance</Text>
                                </View>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.leftMessage}>
                                        Great! it is important to keep things tidy.
                                    </Text>

                                </View>
                            </View>

                        </View>

                    </ScrollView>
                    <View style={{ backgroundColor: "#E2E2DF", paddingHorizontal: 10, borderRadius: 37, flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity>
                            <SvgAttachmentIcon />
                        </TouchableOpacity>
                        <TextInput style={{ width: "95%", padding: 10 }} />
                    </View>
                </View>
            </GradientBackgroundComponent>
        </GestureHandlerRootView>

    );
}

const styles = StyleSheet.create({
    options: {
        backgroundColor: "#F0F0F0",
        padding: 10,
        borderRadius: 8,
        fontSize: 14,
        marginTop: 10
    },
    leftContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10

    },
    leftMessage: {
        width: "100%",
        padding: 10,
        backgroundColor: "#DADADA",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        fontSize: 14,
        marginTop: 10
    },
    rightMessage: {

        padding: 10,
        backgroundColor: "#96C8D3",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        fontSize: 14,
        marginTop: 10
    },
    online: {
        height: 8,
        width: 8,
        backgroundColor: "#3EA95D",
        borderRadius: 50,
        position: "absolute",
        right: 0,
        bottom: 0
    },

    title: {
        textAlign: "center",
        fontSize: 24,
        marginBottom: 20,
        color: "#595959",
    },



});
