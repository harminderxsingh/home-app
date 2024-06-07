import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { Link, router } from "expo-router";
import { View, Text } from "react-native";
import { StyleSheet, ScrollView } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgBurgerIcon from '@/assets/images/blackBurgur.svg';

export default function LoanTrackerForm() {

    return (
        <GestureHandlerRootView style={{ height: "auto" }}>

            <View style={{ padding: 25, zIndex: 1, width: '100%', height: "100%", backgroundColor: "#F0F0F0" }}>

                <ScrollView  >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                        <Link href="/homedata"   >
                            <View style={styles.circle}>
                                <SvgLeftArrow />
                            </View>
                        </Link>
                        <View>
                            <TouchableOpacity style={styles.button} >
                                <SvgBurgerIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.title}>Loan tracker</Text>
                    <Text style={{color:"#5B6369"}}>
                        Answer a few questions to help us set up your mortgage tracker. This will ensure you get the most accurate and personalized information.
                    </Text>
                    <View>
                    <Text style={[styles.label,{fontWeight:600,marginTop:25,marginBottom:16}]}>General info</Text>

                        <Text style={styles.label}>Which project is your house at?</Text>
                        <InputComponent placeholder=" " />
                    </View>
                    <View>
                        <Text style={[styles.label,{fontWeight:600,marginTop:0,marginBottom:16}]}>Mortgage countdown</Text>
                        <View style={styles.flexBetween}>

                            <Text style={styles.label}>House buying price</Text>
                        </View>
                        <InputComponent placeholder=" " />
                    </View>
          
                    <View>
                        <Text style={styles.label}>Down payment amount </Text>
                        <InputComponent placeholder="" />
                    </View>
                    <View>
                        <Text style={styles.label}>Loan amount</Text>
                        <InputComponent placeholder="" />
                    </View>
                    <View>
                        <Text style={styles.label}>Interest on loan</Text>
                        <InputComponent placeholder="" />
                    </View>
                    <View>
                        <Text style={styles.label} >Annual rate of interest</Text>
                        <InputComponent placeholder="" />
                    </View>
                    <View>
                        <Text style={styles.label} >Date loan started</Text>
                        <InputComponent placeholder="" />
                    </View>
                    <View>
                        <Text style={styles.label} >Period of loan (in months)
                        </Text>
                        <InputComponent placeholder="" />
                    </View>
                    <View>
                        <Text style={styles.label} >Bank of loan
                        </Text>
                        <InputComponent placeholder="" />
                    </View>
                    <TouchableOpacity>
                        <ButtonComponent title="Done" onPress={() => { router.push('dashboard') }} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>

    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    circle: {
        width: 30,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 5,
        borderRadius: 50,
    },
    flexBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    label: {
        fontSize: 16,
        color: '#595959',
        paddingBottom: 5,
    },

    title: {
        textAlign: "left",
        fontSize: 24,
        marginBottom: 20,
        marginTop: 40,
        color: "#595959",
    },
    link: {
        color: "#6E90AC",
        fontSize: 12,
    }
});