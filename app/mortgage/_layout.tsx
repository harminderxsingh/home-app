
import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import * as Progress from 'react-native-progress';
import SvgSunWithEarth from '@/assets/images/sunWithEarth.svg';
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgBurgerIcon from '@/assets/images/blackBurgur.svg';

export default function MortgageData() {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <View style={{ backgroundColor: "#F0F0F0" }}>

                <View style={[styles.outerGap, styles.flexWithBetween]}>
                    <Link href="/homedata" >
                        <View style={styles.link}>
                            <SvgLeftArrow />
                        </View>
                    </Link>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={handleButtonClick} >
                            <SvgBurgerIcon />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ backgroundColor: "rgba(0,0,0,0)", margin: 20 }}>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                        <Text style={[styles.title, styles.font24, styles.fontWeight600]} >Mortgage data</Text>
                        <View style={{ marginTop: 40, }}>
                            <View style={{ backgroundColor: "#466488", borderRadius: 12, paddingTop: 17, paddingLeft: 21 }}>
                                <View >
                                    <Text style={[styles.textWhite, styles.font16, { fontWeight: 500 }]}>Mortgage due date countdown</Text>
                                    <Text style={[styles.textWhite, { paddingTop: 5 }]}>April 2024</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                        <View style={{ paddingBottom: 17 }}>

                                            <Text style={[styles.textCenter, styles.textWhite]}>05</Text>
                                            <Text style={[styles.textWhite, { marginTop: -10, textAlign: "center" }]} >Years</Text>
                                        </View>
                                        <View style={{ paddingBottom: 17 }}>
                                            <Text style={[styles.textCenter, styles.textWhite]}>08</Text>
                                            <Text style={[styles.textWhite, { marginTop: -10, textAlign: "center" }]}>months</Text>
                                        </View>
                                        <SvgSunWithEarth />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.shadow, { backgroundColor: "#E8E0D4", borderRadius: 12, marginTop: 17, padding: 17 }]}>
                                <View >
                                    <Text style={[styles.font16, { color: "#595959", fontWeight: 500 }]}>My next payment </Text>
                                    <Text style={[{ color: "#595959", paddingTop: 5 }]}>May 2024</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[styles.textCenter, { color: "#595959", paddingRight: 10 }]}>₱</Text>
                                            <Text style={[styles.textCenter, { color: "#595959" }]}>40000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.shadow, { backgroundColor: "#fff", borderRadius: 12, marginTop: 17, padding: 17 }]}>
                                <View >
                                    <Text style={[styles.font16, { color: "#595959", fontWeight: 500, }]}>Payoff progress </Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", }}>
                                        <View style={{ paddingBottom: 17 }}>

                                            <View >
                                                <Text>
                                                    ProgressBar
                                                </Text>
                                                {/* <Progress.Bar progress={0.3} width={200} /> */}

                                            </View>

                                        </View>

                                        <View style={{ paddingBottom: 17 }}>
                                            <View>
                                                <Text style={[styles.balance]}>
                                                    Principal paid
                                                </Text>
                                                <Text style={[styles.amount, { color: "#6C955D" }]}>
                                                    ₱ 88,350.52
                                                </Text>
                                            </View>
                                            <View>
                                                <Text style={[styles.balance]}>
                                                    Balance
                                                </Text>
                                                <Text style={[styles.amount, { color: "#BC5D54" }]}>
                                                    ₱ 88,350.52
                                                </Text>
                                            </View>
                                            <View>
                                                <Text style={[styles.balance]}>
                                                    Interest paid
                                                </Text>
                                                <Text style={[styles.amount, { color: "#BC5D54" }]}>
                                                    ₱ 88,350.52
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </GestureHandlerRootView>

    );
}
const styles = StyleSheet.create({

    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    amount: {
        marginBottom: 11,
        fontWeight: 700,
        fontSize: 18,
    },
    balance: {
        color: "rgba(91, 99, 105, 0.8)",
        fontSize: 14,
        fontWeight: 500,
    },
    textWhite: {
        color: "#fff",
    },
    textCenter: {
        fontSize: 40,
        fontWeight: 800,
        textAlign: "center",
    },
    flexWithBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    outerGap: {
        margin: 20,
    },
    link: {
        width: 30,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 5,
        borderRadius: 50,
    },
    fontWeight600: {
        fontWeight: 600,
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
    font16: {
        fontSize: 16
    },
    font24: {
        fontSize: 24,
    },
    title: {
        textAlign: "left",
        fontSize: 24,
        color: "#595959",
    },
});