import React, { useContext, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link } from "expo-router";
import Header from "../header/_layout";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import SvgPhone from '@/assets/images/phone-black.svg';
import SvgWarning from '@/assets/images/warning-black.svg';
import SvgCheck from '@/assets/images/check.svg';
import * as Linking from 'expo-linking';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { router } from "expo-router";
import { AuthContext } from "@/contexts/AuthContext";

export default function Contact() {
    const { user, updateNotification } = useContext(AuthContext);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [value, setValue] = useState('');

    const windowHeight = Dimensions.get('window').height;
    const calculatedHeight = windowHeight - 160;

    const handleDateChange = (event, selectedDate) => {
        if (selectedDate) {
            setValue(format(selectedDate, 'yyyy-MM-dd'));
        }
        setShowDatePicker(false);
    };


    const handleUpdate = async () => {
        try {
            await updateNotification({ ...user, solarPanelCleanedDate: value })
            router.push('dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GradientBackgroundComponent>
                <Header isBack={true} />
                <ScrollView style={{ backgroundColor: "#F7F7F7", borderTopLeftRadius: 16, borderTopRightRadius: 16, marginHorizontal: 25, padding: 29, height: calculatedHeight, flexDirection: "column" }}>
                    <View>
                        <Text style={styles.title}>Solar panel cleaning time</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", paddingHorizontal: 20 }}>
                            <SvgWarning />
                            <Text style={{ color: "#595959", fontSize: 12, marginStart: 5 }}>Keeping your solar panels clean would maximize your annual saving.</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 21 }}>
                            <SvgPhone />
                            <Text style={{ color: "#595959", fontSize: 18, marginStart: 5 }}>889 665 567</Text>
                        </View>
                        <ButtonComponent title="Book now" onPress={() => { Linking.openURL('tel:889665567') }} />
                        <Link href="/" style={{ textAlign: "center", fontSize: 18, color: "#595959", marginTop: 56, marginBottom: 17 }}>Already cleaned? </Link>
                        <View style={{ flexDirection: "row", justifyContent: 'center', marginBottom: 5 }}>
                            <SvgCheck />
                        </View>
                        <Text style={{ color: "#595959" }}>Great! Mark the date and we will send you a reminder for next maintenance.</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#595959", marginBottom: 10 }}>Date of the cleaning</Text>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                            <View pointerEvents="none">
                                <InputComponent placeholder="" value={value} editable={false} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {showDatePicker && (
                        <RNDateTimePicker
                            value={value ? new Date(value) : new Date()}
                            onChange={handleDateChange}
                        />
                    )}
                    <View style={{ marginBottom: 130 }}>
                        <ButtonComponent title="Done" onPress={handleUpdate} />
                    </View>
                </ScrollView>
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
