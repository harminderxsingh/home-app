import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";
import { View, Text } from "react-native";
import {  StyleSheet } from 'react-native';

export default function About() {

    return (
        <View style={{ position: "absolute", bottom: 0, padding: 15, zIndex: 1, width: '100%', height: '100%', backgroundColor: "#F0F0F0" }}>
            <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <Text style={styles.title}>About</Text>
                <View>
                    <ButtonComponent title="OK" onPress={() => { router.push('dashboard') }} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        textAlign: "left",
        fontSize: 24,
        marginBottom: 20,
        color: "#595959",
    },
});