import React from "react";
import {
    StyleSheet,
    View,
    Text,

} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import Header from "../header/_layout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgAlert from '@/assets/images/bell.svg';
import { CheckBox } from "react-native-elements";
import { router } from "expo-router";



export default function NotificationSetting() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GradientBackgroundComponent>
                <Header />
                <View style={{ backgroundColor: "#F7F7F7", borderTopLeftRadius: 16, borderTopRightRadius: 16, marginHorizontal: 25, padding: 29, height: "89%", flexDirection: "column", justifyContent: "space-between" }}>
                    <View >
                        <Text style={styles.title}>Notifications Settings</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 30 }}>
                            <SvgAlert />
                        </View>
                        <View >
                            <Text style={styles.label}>Date of house purchase </Text>
                            <InputComponent placeholder=" " />
                        </View>
                        <View>
                            <Text style={styles.label}>Date of last solar panel cleaning </Text>
                            <InputComponent placeholder=" " />
                            <View style={styles.flex}>
                                <CheckBox />
                                <Text style={styles.label}>Never been cleaned</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>Date of last septic tank cleaning </Text>
                            <InputComponent placeholder=" " />
                            <View style={styles.flex}>
                                <CheckBox />
                                <Text style={styles.label}>Never been cleaned</Text>
                            </View>
                        </View>





                    </View>




                    <View style={{ marginBottom: 80 }}>
                        <ButtonComponent title="Done" onPress={() => {router.push("/dashboard") }} />
                    </View>
                </View>

            </GradientBackgroundComponent>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    flex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    label: {
        fontSize: 16,
        color: '#595959',
        paddingBottom: 5,
    },

    input: {
        width: "100%",
        backgroundColor: '#fff',
        borderWidth: 0,
        padding: 13,
        borderRadius: 12,
        marginBottom: 14,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: '#595959',
    },
    spaceTop: {
        marginTop: 15
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        color: "#595959",
    },

    link: {
        color: "#1E90FF",
    }
});
