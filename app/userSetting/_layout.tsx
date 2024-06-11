import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { Link, router } from "expo-router";
import { View, Text } from "react-native";
import { StyleSheet, ScrollView } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import SvgUserIcon from '@/assets/images/userIcon.svg';
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function UserSetting() {

    const { user, updateProfile } = useContext(AuthContext);
    const [formValues, setFormValues] = useState(user)

    const handleInput = (data: any) => {
        setFormValues({ ...formValues, [data.name]: data.value })
    }

    const handleUpdate = async () => {
        try {
            await updateProfile(formValues)
            router.push('dashboard')
        } catch (error) {
        }
    }
    return (
        <GestureHandlerRootView style={{ height: "auto" }}>
    <StatusBar backgroundColor="#D1D1D1"></StatusBar>
            <View style={{ padding: 25, zIndex: 1, width: '100%', height: "100%", backgroundColor: "#F0F0F0" }}>
            <ScrollView  >
                    <View >
                        <Text style={styles.title}>User settings</Text>
                        <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                            <View style={{ backgroundColor: "#D9D9D9", padding: 30, borderRadius: 50 }}>
                                <SvgUserIcon />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>Full name</Text>
                            <InputComponent name="fullName" value={formValues.fullName} onInput={handleInput} placeholder="Anna Alamos" />
                        </View>
                        <View>
                            <View style={styles.flexBetween}>
                                <Text style={styles.label}>Phone number</Text>
                                <Link href="/signup" style={styles.link} >Edit Phone number</Link>
                            </View>
                            <InputComponent name="phone" value={formValues.phone} onInput={handleInput} placeholder="9352385 585" />
                        </View>
                        <View>
                            <View style={styles.flexBetween}>
                                <Text style={styles.label}>Login PIN</Text>
                                <Link href="/signup" style={styles.link}>Change PIN</Link>
                            </View>
                            {/* <InputComponent placeholder="9352385 585" /> */}
                        </View>
                        <View style={{ borderTopWidth: 1, marginTop: 10, borderTopColor: "#727272" }}>
                            <Text style={{ fontWeight: 700, color: "#595959", paddingTop: 15, fontSize: 16 }}>Tell Us More About Yourself</Text>
                            <Text style={{ fontWeight: 400, color: "#595959", lineHeight: 24, paddingVertical: 10 }}>Share additional details to help us tailor your experience.</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Occupation</Text>
                            <InputComponent name="occupation" value={formValues.occupation} onInput={handleInput} placeholder="" />
                        </View>
                        <View>
                            <Text style={styles.label}>Age</Text>
                            <InputComponent name="age" value={`${formValues.age}`} onInput={handleInput} placeholder="" keyboardType="numeric" />
                        </View>
                        <View>
                            <Text style={styles.label}>What are your hobbies and interests?</Text>
                            <InputComponent name="interests" value={formValues.interests} onInput={handleInput} placeholder="" />
                        </View>
                        <View>
                            <Text style={styles.label} >What is your household size
                                (number of adults and children)?</Text>
                            <InputComponent name="householdSize" value={`${formValues.householdSize}`} onInput={handleInput} keyboardType="numeric" placeholder="" />
                        </View>
                        <View>
                            <Text style={styles.label} >Do you have any pets?</Text>
                            <InputComponent name="pets" value={formValues.pets} onInput={handleInput} placeholder="" />
                        </View>
                        <View>
                            <Text style={styles.label} >Do you have any specific accessibility
                                needs or requirements?
                            </Text>
                            <InputComponent name="accessibility" value={formValues.accessibility} onInput={handleInput} placeholder="" />
                        </View>
                        <TouchableOpacity>
                            <ButtonComponent title="Update" onPress={handleUpdate} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </GestureHandlerRootView>

    );
}
const styles = StyleSheet.create({
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