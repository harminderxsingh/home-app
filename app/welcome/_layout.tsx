import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Header from "../header/_layout";
import { Link, router } from "expo-router";
import W1 from '@/assets/images/icons/w-1.svg';
import W2 from '@/assets/images/icons/w-2.svg';
import W3 from '@/assets/images/icons/w-3.svg';
import W4 from '@/assets/images/icons/w-4.svg';
import W5 from '@/assets/images/icons/w-5.svg';
import SeinnaLogo from '@/assets/images/seinnaLogo.svg';


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
                            <Text style={{ fontSize: 24, color: "#fff", marginVertical: 10, textAlign: "center" }}>Welcome home </Text>
                            <View style={{ flexDirection: "row", justifyContent: "center"}} >
                                <SeinnaLogo />
                            </View>
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginTop: 10,columnGap:10 }}>
                                <TouchableOpacity>
                                    <W1 height={35} width={35} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <W2 height={35} width={35} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <W3 height={35} width={35} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <W4 height={35} width={35} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <W5 height={35} width={35} />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginVertical:100}}>
                            <ButtonComponent title="Sign up" onPress={() => { router.push('signup') }} />
                            </View>
                        </View>
                        <View>
                        <Text style={styles.text}>Already have an account?{"\n"}
                            <TouchableOpacity><Link style={styles.link} href="/login">Log in</Link></TouchableOpacity></Text>
                    </View>
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
