import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid, Animated, Keyboard } from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, router, useFocusEffect } from "expo-router";
import Header from "../header/_layout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgUserIcon from '@/assets/images/userIcon.svg';
import { authService } from "@/services/AuthService";
import { Picker } from "@react-native-picker/picker";
import { communityService } from "@/services/CommunityService";
import { AuthContext } from "@/contexts/AuthContext";
import InsetShadow from 'react-native-inset-shadow'

export default function Login() {
  const [formValues, setFormValues] = useState<any>({ communityId: '' });
  const [communities, setCommunities] = useState<any[]>([]);
  const { login } = useContext(AuthContext);
  useEffect(() => {
    communityService.get().then(res => {
      setCommunities(res)
    })
  }, [])

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
  const navigate = async (path: string) => {
    router.push(path)
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GradientBackgroundComponent>
        <Header />
            <View style={[styles.card, keyboardOpen ? styles.cardWithKeyboard : styles.cardWithoutKeyboard]}>
              <View style={{ flexDirection: "column", height: "85%", justifyContent: "space-between" }}>
                <View>
                  <Text style={styles.title}>Log in</Text>
                  <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    <SvgUserIcon />
                  </View>

                  <View style={{ height: 1, backgroundColor: "#595959", marginVertical: 50 }}></View>
                  <View style={styles.pickerContainer} >
                    <Picker
                      style={styles.input}
                      selectedValue={formValues.communityId}
                      onValueChange={(itemValue) =>
                        handleInput({ name: 'communityId', value: itemValue })
                      }

                    >
                      <Picker.Item label="Select a community" value="" color={styles.disabledItem.color} />
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
                  <TouchableOpacity onPress={() => navigate('/signup')}>
                    <Text style={styles.link}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>

      </GradientBackgroundComponent>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:"white",
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
    padding:  34,
  },
  cardWithKeyboard: {
    bottom: -50
  },
  cardWithoutKeyboard: {
    minHeight: '80%'
  },
  pickerContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 14,
  },
  input: {
    width: "100%",
    backgroundColor: '#f0f0f0',
    borderWidth: 0,
    padding: 13,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#595959',
  },
  disabledItem: {
    color: 'gray',
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
    color: "#595959",
  }
});
