import ButtonComponent from "@/components/ButtonComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { BlurView } from "expo-blur";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Header from "../header/_layout";
import SvgWarning from '@/assets/images/warning-big.svg';
import BlurViewComponent from "@/components/BlurViewComponent";

export default function About() {
    const [visible, setVisible] = useState(false);

    useFocusEffect(
        useCallback(() => {
            const timer = setTimeout(() => setVisible(true), 100);
            return () => {
                clearTimeout(timer);
                setVisible(false); // Reset state when screen loses focus
            };
        }, [])
    );
    return (
        <GradientBackgroundComponent style={{ flex: 1 }}>
            <GestureHandlerRootView  >
                <Header />
                <BlurViewComponent intensity={52} tint='light' blurReductionFactor={3} experimentalBlurMethod={visible ? 'dimezisBlurView' : 'none'} style={styles.card} key="login">
                
                    <View style={{ position: "absolute", padding: 15, zIndex: 1, width: '100%', height: '100%' }}>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                            <View style={{borderBottomColor:"#fff",borderBottomWidth:1, paddingBottom:52,marginHorizontal:20}}>
                                <Text style={styles.title}>About</Text>
                                <View style={{flexDirection:'row',justifyContent:"center"}}><SvgWarning /></View>
                            </View>
                            <View style={{paddingBottom:50, paddingHorizontal:20}}>
                                <ButtonComponent title="OK" onPress={() => { router.push('dashboard') }} />
                            </View>
                        </View>
                    </View>
                </BlurViewComponent>

            </GestureHandlerRootView>
        </GradientBackgroundComponent>
    );
}
const styles = StyleSheet.create({
    card: {
        height: "85%",
        minHeight: "80%",
        borderRadius: 16,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        margin: 20,
        marginBottom: 0,
        overflow: 'hidden',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        marginTop: 20,
        marginBottom:26,
        color: "#fff",
    },
});