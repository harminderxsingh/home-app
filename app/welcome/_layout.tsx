import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Header from "../header/_layout";
import { Link, router } from "expo-router";
import SvgSetting from '@/assets/images/setting.svg';

import {
    GestureHandlerRootView,
} from "react-native-gesture-handler";
import ButtonComponent from "@/components/ButtonComponent";

export default function Welcome() {
    return (
        <GradientBackgroundComponent>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'column', justifyContent: "space-between", height: "100%", paddingBottom: 32, }}>
                    <Header />
                    <View>
                        <View style={[{ marginHorizontal: 50, }]}>
                            <Text style={{ fontSize: 24, color: "#fff", marginVertical: 30, textAlign: "center" }}>Welcome to Billion bricks </Text>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginVertical: 30 }}>
                                <SvgSetting height={35} width={35} />
                            </View>
                            <ButtonComponent title="Sign up" onPress={() => { router.push('signup') }} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>Already have an account?{"\n"}
                            <TouchableOpacity><Link style={styles.link} href="/login">Log in</Link></TouchableOpacity></Text>
                    </View>
                </View>

            </GestureHandlerRootView>
        </GradientBackgroundComponent>
    );
}
const styles = StyleSheet.create({
    center: {
        textAlign: "center",
    },
    text: {
        color: "#fff",
        textAlign: "center",
        marginTop: 10,
    },
    link: {
        color: "#fff",
    }

});
