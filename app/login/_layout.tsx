import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, router } from "expo-router";
import Header from "../header/_layout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgUserIcon from '@/assets/images/userIcon.svg';
import { authService } from "@/services/AuthService";
import { Picker } from "@react-native-picker/picker";
import { communityService } from "@/services/CommunityService";
import { AuthContext } from "@/contexts/AuthContext";

export default function Login() {
  const [formValues, setFormValues] = useState<any>({});
  const [communities, setCommunities] = useState<any[]>([]);
  const { login } = useContext(AuthContext);
  useEffect(() => {
    communityService.get().then(res => {
      setCommunities(res)
    })
  }, [])

  const handleInput = (data: any) => {
    setFormValues({ ...formValues, [data.name]: data.value })
  }
  const showToast = (msg: any = "Login Successfully") => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
};
  const handleLogin = async () => {
    try {
      await login(formValues);
      router.push('dashboard')
    } catch (error: any) {
      showToast(error.response.data.message);
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GradientBackgroundComponent>
        <Header />
        <CardComponent>
          <View style={{ flexDirection: "column", height: "85%", justifyContent: "space-between" }}>
            <View>
              <Text style={styles.title}>Log in</Text>
              <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                <SvgUserIcon />
              </View>

              <View style={{ height: 1, backgroundColor: "#323232", marginVertical: 50 }}></View>
              <View style={styles.pickerContainer}>
                <Picker
                  style={styles.input}
                  selectedValue={formValues.communityId}
                  onValueChange={(itemValue) =>
                    handleInput({ name: 'communityId', value: itemValue })
                  }>
                  {
                    communities.map(c =>
                      <Picker.Item key={c.id} label={c.name} value={c.id} />
                    )
                  }
                </Picker>
              </View>
              <InputComponent name="houseNo" placeholder="House number" onInput={handleInput} keyboardType="number-pad" />
              <InputComponent name="password" placeholder="Password" onInput={handleInput} secureTextEntry={true} />
            </View>
          </View>
          <View>

            <ButtonComponent title="Log in" onPress={handleLogin} />

            <Text style={styles.text}>
              Don’t have an account?{"\n"}
              <TouchableOpacity>
                <Link href="/signup" style={styles.link}>
                  Sign up
                </Link>
              </TouchableOpacity>
            </Text>
          </View>
        </CardComponent>
      </GradientBackgroundComponent>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({

  pickerContainer: {
    borderWidth: 0,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 14,
  },
  input: {
    width: "100%",
    backgroundColor: '#fff',
    borderWidth: 0,
    padding: 13,
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

  text: {
    color: "#595959",
    textAlign: "center",
    marginTop: 10,
  },
  link: {
    color: "#1E90FF",
  }
});
