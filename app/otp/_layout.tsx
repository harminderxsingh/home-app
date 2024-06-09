import React, { useState, useEffect, useContext } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, router, useLocalSearchParams } from "expo-router";
import Header from "../header/_layout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import W1 from '@/assets/images/icons/b-1.svg';
import W2 from '@/assets/images/icons/b-2.svg';
import W3 from '@/assets/images/icons/b-3.svg';
import W4 from '@/assets/images/icons/b-4.svg';
import W5 from '@/assets/images/icons/b-5.svg';
import { AuthContext } from "@/contexts/AuthContext";

export default function Otp() {

    const { data } = useLocalSearchParams();

    const [formValues, setFormValues] = useState<any>({});
    const { login } = useContext(AuthContext);

    useEffect(() => {
        if (data && typeof data === 'string') {
            setFormValues({ ...formValues, ...JSON.parse(data) });
        }
    }, [data]);

    const handleInput = (data: any) => {
        setFormValues({ ...formValues, [data.name]: data.value })
    }

    const handleLogin = async () => {
        try {
          await login(formValues);
          router.push('dashboard')
        } catch (error) {
          console.error(error)
        }
      };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GradientBackgroundComponent>
                <Header />
                <View style={{ backgroundColor: "#F7F7F7", borderTopLeftRadius: 16, borderTopRightRadius: 16, marginHorizontal: 25, padding: 29, height: "89%", flexDirection: "column", justifyContent: "space-between" }}>
                    <View >
                        <Text style={styles.title}>Almost there...</Text>
                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginVertical: 50, columnGap: 10 }}>
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
                        <Text style={{ textAlign: "center", marginBottom: 19, color: "#595959" }}>We sent you an SMS with a password</Text>
                        <InputComponent name="password" placeholder=" " onInput={handleInput} secureTextEntry={true} />
                        <Link href="/" style={[styles.link, { textAlign: "center", marginTop: 0 }]}>Didn’t receive? Resend SMS</Link>
                    </View>
                    <View style={{ marginBottom: 100 }}>
                        <ButtonComponent title="Sign up" onPress={handleLogin} />
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
        fontSize: 24,
        marginBottom: 20,
        color: "#595959",
    },

    link: {
        color: "#1E90FF",
    }
});
