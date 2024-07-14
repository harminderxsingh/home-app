
import { Link } from "expo-router";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Header from "../header/_layout";
import HomeBackgroundComponent from "@/components/HomeBackgroundComponent";
import { BlurView } from "expo-blur";

export default function HomeData() {


    return (
        <HomeBackgroundComponent>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Header />
                <View style={{ backgroundColor: "rgba(0,0,0,0)", margin: 20 }}>
                    <View style={{ display: "flex", flexDirection: "column", height: "100%" }}>

                        <Text style={[styles.title, styles.font24, styles.colorWhite, styles.fontWeight600]} >Home portal</Text>
                        <Text style={[styles.font14, styles.colorWhite, styles.fontWeight600]}>Get to know your home by the numbers</Text>
                        <View style={{ marginTop: 40, }}>
                            <BlurView style={[styles.btn]}
                                intensity={50} tint='light' blurReductionFactor={1} experimentalBlurMethod='dimezisBlurView'>
                                <Link href='/ddcHome' style={styles.textCenter} >
                                    <TextInput autoFocus={true} >
                                        Solar Performance
                                    </TextInput>
                                </Link>
                            </BlurView>
                            <Link href='/electricbill' style={[styles.btn, { backgroundColor: "#D9D9D9" }]}>
                                Electricity bill
                            </Link>
                            <Link href='/waterbill' style={[styles.btn, { backgroundColor: "#96C8D3" }]}>
                                Water bill
                            </Link>
                            <Link href='/mortgage' style={[styles.btn, { backgroundColor: "#D6C09D" }]}>
                                Loan tracker
                            </Link>
                        </View>
                    </View>
                </View>
            </GestureHandlerRootView>
        </HomeBackgroundComponent>


    );
}
const styles = StyleSheet.create({
textCenter:{textAlign:"center",



},
    fontWeight600: {
        fontWeight: 600,
    },
    btn: {
        paddingVertical: 25,
        // backgroundColor: "gray",
        borderRadius: 15,
        fontSize: 20,
        // fontWeight: 600,
        overflow: "hidden",
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