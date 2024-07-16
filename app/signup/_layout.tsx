import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, router, useFocusEffect } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import SvgUserIcon from '@/assets/images/userIcon.svg';
import { authService } from '@/services/AuthService';
import Header from "../header/_layout";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { communityService } from "@/services/CommunityService";
import { AuthContext } from "@/contexts/AuthContext";
import { BlurView } from "expo-blur";
import InsetShadow from 'react-native-inset-shadow'


export default function Signup() {
  const inputRef = useRef<TextInput>(null);
  const [visible, setVisible] = useState(false);

  const [communities, setCommunities] = useState<any[]>([]);
  const [formValues, setFormValues] = useState<any>({});
  const { signup } = useContext(AuthContext);

  useEffect(() => {
    communityService.get().then(res => {
      setCommunities(res)
    })
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    // inputRef.current?.focus()
    // setTimeout(() => setVisible(true), 100);
    // return () => {
    //   setVisible(false)
    // }
  }, [])

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => setVisible(true), 100);
      return () => {
        clearTimeout(timer);
        setVisible(false); // Reset state when screen loses focus
      };
    }, [])
  );

  const showToast = (msg: any) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  const handleSignUp = async () => {
    try {
      await signup(formValues);
      router.push('dashboard')
      // router.push({
      //   pathname: 'otp',
      //   params: {
      //     data: JSON.stringify(formValues),

      //   },
      // });
    } catch (error: any) {
      // console.error("error.response front", error.response.data.message)
      if (error.response.status == 400) {
        showToast(error.response.data.message);
      }
      if (error.response.status == 500) {
        showToast(error.response.data.message);
      }
    }
  };

  const handleInput = (data: any) => {
    setFormValues({ ...formValues, [data.name]: data.value })
  }

  const navigate = async (path: string) => {
    setVisible(false)
    router.push(path)
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <GradientBackgroundComponent >
        <Header />
        <BlurView intensity={52} tint='light' blurReductionFactor={3} experimentalBlurMethod={visible ? 'dimezisBlurView' : 'none'} style={styles.card} key="login">
          <InsetShadow shadowColor="white" left={false} shadowOpacity={10} elevation={10} style={{ borderRadius: 16 }}>
            <View style={{ padding: 34, }}>
              <Text style={styles.title}>Sign up</Text>
              <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                <SvgUserIcon />
              </View>
              {/* <ButtonComponent title="Log in with Facebook" onPress={() => { }} /> */}
              <View style={{ height: 1, backgroundColor: "#fff", marginVertical: 30 }}></View>
              <View >
                <InputComponent ref={inputRef} name="fullName" placeholder="Full name" onInput={handleInput} />
                {/* <DropdownComponent /> */}
                <View style={styles.pickerContainer}>
                  <Picker
                    style={styles.input}
                    selectedValue={formValues.communityId}
                    onValueChange={(itemValue) =>
                      handleInput({ name: 'communityId', value: itemValue })
                    }>
                    <Picker.Item label="Select a community" value="" color={styles.disabledItem.color} />
                    {
                      communities.map(c =>
                        <Picker.Item key={c.id} label={c.name} value={c.id} />
                      )
                    }
                  </Picker>
                </View>
                <InputComponent name="houseNo" placeholder="House number" onInput={handleInput} keyboardType="number-pad" />
                <InputComponent name="customerNumber" placeholder="Customer number / ID ??" onInput={handleInput} />
                <InputComponent name="phone" placeholder="Phone number" onInput={handleInput} keyboardType="phone-pad" />
                <InputComponent name="password" placeholder="Password" onInput={handleInput} secureTextEntry={true} />
                <View style={{ marginVertical: 5 }}>
                  <ButtonComponent title="Continue" onPress={handleSignUp} />
                </View>
                <Text style={styles.text}>Already have an account?{"\n"}
                  <TouchableOpacity onPress={() => navigate('login')}><Text style={styles.link}>Login</Text></TouchableOpacity>
                </Text>
              </View>
            </View>
          </InsetShadow>
        </BlurView>
      </GradientBackgroundComponent>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  card: {
    height: "85%",
    minHeight: "80%",
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
  },
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
  disabledItem: {
    color: 'gray',
  },
  orTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: {
    marginTop: 3,
    height: 1,
    width: 100,
    backgroundColor: "#888",
  },
  mLeft: {
    marginLeft: 5,

  },
  mRight: {
    marginRight: 5,

  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 10,
    color: "#fff",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#000",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  link: {
    color: "#fff",
  }
});
