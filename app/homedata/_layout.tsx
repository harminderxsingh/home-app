
import { Link } from "expo-router";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import Header from "../header/_layout";
import HomeBackgroundComponent from "@/components/HomeBackgroundComponent";

export default function HomeData() {


    return (
        <HomeBackgroundComponent>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Header />
                <View style={{ backgroundColor: "rgba(0,0,0,0)", margin: 20 }}>
                    <View style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <Text style={[styles.title, styles.font24, styles.colorWhite, styles.fontWeight600]} >Home data</Text>
                        <Text style={[styles.font14, styles.colorWhite, styles.fontWeight600]}>Watch Live data in our partners website</Text>
                        <View style={{ marginTop: 40, }}>
                            <Link href='/ddcHome' style={[styles.btn, { backgroundColor: "#DCCBAF" }]} >
                                Solar energy data
                            </Link>
                            <Link href='/ddcHome' style={[styles.btn, { backgroundColor: "#D9D9D9" }]}>
                                Utility electricity data
                            </Link>
                            <Link href='/ddcHome' style={[styles.btn, { backgroundColor: "#96C8D3" }]}>
                                Water data
                            </Link>
                            <Link href='/mortgage' style={[styles.btn, { backgroundColor: "#F4B081" }]}>
                                mortgage data
                            </Link>
                        </View>
                    </View>
                </View>
            </GestureHandlerRootView>
        </HomeBackgroundComponent>


    );
}
const styles = StyleSheet.create({

    fontWeight600: {
        fontWeight: 600,
    },
    btn: {
        paddingVertical: 25,
        backgroundColor: "gray",
        borderRadius: 15,
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        color: "#292828",
        marginBottom: 20,
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