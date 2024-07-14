import React, { useContext, useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,

} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import Header from "../header/_layout";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import SvgAlert from '@/assets/images/bell.svg';
import Checkbox from 'expo-checkbox';
import { router } from "expo-router";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { format, formatDate } from "date-fns";
import { AuthContext } from "@/contexts/AuthContext";
import { BlurView } from "expo-blur";



export default function NotificationSetting() {
    const { user, updateNotification } = useContext(AuthContext);
    const [showDatePicker, setShowDatePicker] = useState('')
    const [formValues, setFormValues] = useState(user)

    const handleInput = (data: any) => {
        setFormValues({ ...formValues, [data.name]: data.value })
    }

    const handleDateChange = (e: any, selectedDate: any) => {
        const currentDate = selectedDate;
        handleInput({ name: showDatePicker, value: format(currentDate, 'yyyy-MM-dd') });
        setShowDatePicker('');
    };

    const handleCheckNull = (key: string) => {
        handleInput({ name: key, value: null });
    }

    const handleUpdate = async () => {
        try {
            await updateNotification(formValues)
            router.push('dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fixDate = (val: string | null) => val ? formatDate(val, 'yyyy-MM-dd') : null;
        setFormValues({
            ...formValues,
            housePurchasedDate: fixDate(user?.housePurchasedDate),
            solarPanelCleanedDate: fixDate(user?.solarPanelCleanedDate),
            septicTankCleanedDate: fixDate(user?.septicTankCleanedDate),
        })
    }, [user])
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GradientBackgroundComponent>
                <Header />
                <BlurView
                    intensity={50} tint='light' blurReductionFactor={1} experimentalBlurMethod='dimezisBlurView' style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, marginHorizontal: 25, padding: 29, height: "89%", flexDirection: "column", justifyContent: "space-between",overflow:"hidden" }}>
                    <View >
                        <TextInput style={styles.title} autoFocus={true} >Notifications Settings</TextInput>
                        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 30 }}>
                            <SvgAlert />
                        </View>
                        <View>
                            <Text style={styles.label}>Date of house purchase </Text>
                            <TouchableOpacity onPress={() => setShowDatePicker('housePurchasedDate')}>
                                <View pointerEvents="none">
                                    <InputComponent placeholder="" value={formValues?.housePurchasedDate} editable={false} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.label}>Date of last solar panel cleaning </Text>
                            <TouchableOpacity onPress={() => setShowDatePicker('solarPanelCleanedDate')}>
                                <View pointerEvents="none">
                                    <InputComponent placeholder="" value={formValues?.solarPanelCleanedDate} editable={false} />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.flex}>
                                <Checkbox value={formValues?.solarPanelCleanedDate == null} onValueChange={() => handleCheckNull('solarPanelCleanedDate')} />
                                <Text style={styles.label}>Never been cleaned</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>Date of last septic tank cleaning </Text>
                            <TouchableOpacity onPress={() => setShowDatePicker('septicTankCleanedDate')}>
                                <View pointerEvents="none">
                                    <InputComponent placeholder="" value={formValues?.septicTankCleanedDate} editable={false} />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.flex}>
                                <Checkbox value={formValues?.septicTankCleanedDate == null} onValueChange={() => handleCheckNull('septicTankCleanedDate')} />
                                <Text style={styles.label}>Never been cleaned</Text>
                            </View>
                        </View>


                        {
                            !!showDatePicker && <RNDateTimePicker value={new Date(formValues[showDatePicker] ?? Date.now())} onChange={handleDateChange} />
                        }


                    </View>




                    <View style={{ marginBottom: 80 }}>
                        <ButtonComponent title="Done" onPress={handleUpdate} />
                    </View>
                </BlurView>

            </GradientBackgroundComponent>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    flex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    label: {
        fontSize: 16,
        color: '#595959',
        paddingBottom: 5,
    },

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
    spaceTop: {
        marginTop: 15
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        color: "#595959",
    },

    link: {
        color: "#1E90FF",
    }
});
