import React, { useState, useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link } from "expo-router";
import DropdownComponent from "@/components/DropDownComponent";
import { Picker } from '@react-native-picker/picker';
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Header from "../header/_layout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgPhone from '@/assets/images/phone-black.svg';
import SvgWarning from '@/assets/images/warning-black.svg';
import SvgCheck from '@/assets/images/check.svg';


export default function Contact() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <GradientBackgroundComponent>

                <Header />

                <View style={{ backgroundColor: "#F7F7F7", borderTopLeftRadius: 16, borderTopRightRadius: 16, marginHorizontal: 25, padding: 29, height: "89%", flexDirection: "column", justifyContent: "space-between" }}>
                    <View >
                        <Text style={styles.title}>Solar panel cleaning time</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center" ,paddingHorizontal:20}}>
                            <View>
                                <SvgWarning />
                            </View>
                            <Text style={{ color: "#595959",fontSize:12,marginStart:5 }}>Keeping your solar panels clean would maximize your annual saving.</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center",marginVertical:21}}>
                            <View>
                                <SvgPhone />
                            </View>
                            <Text style={{ color: "#595959",fontSize:18,marginStart:5  }}>889 665 567</Text>
                        </View>


                        <ButtonComponent title="Book now" onPress={() => { }} />


                        <Link href="/" style={{textAlign:"center",fontSize:18,color:"#595959"  ,marginTop:56,marginBottom:17}}>Already cleaned? </Link>
                        <View style={{ flexDirection: "row", justifyContent: 'center',marginBottom:5 }}>
                            <SvgCheck />
                        </View>

                        <Text style={{color:"#595959"}}>Great! Mark the date and we will send you a reminder for next maintenance.</Text>



                    </View>
                    <View>
                        <Text style={{ color: "#595959",marginBottom:10 }}>Date of the cleaning</Text>
                        <InputComponent placeholder="16/24/2023" />
                    </View>



                    <View style={{ marginBottom: 130 }}>
                        <ButtonComponent title="Done" onPress={() => { }} />
                    </View>
                </View>

            </GradientBackgroundComponent>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
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

    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 20,
        color: "#595959",
    },

    link: {
        color: "#1E90FF",
    }
});
