import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link } from "expo-router";
import DropdownComponent from "@/components/DropDownComponent";
import { Picker } from '@react-native-picker/picker';
import SvgUserIcon from '@/assets/images/userIcon.svg';
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Signup() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <GradientBackgroundComponent>
      <CardComponent>
        <Text style={styles.title}>Sign up</Text>
        <View style={{flexDirection:"row",justifyContent:'center',marginBottom:20}}>
          <SvgUserIcon />
        </View>
        <ButtonComponent title="Log in with Facebook" onPress={() => { }} />
        <View style={styles.orTextContainer}>
          <View style={[styles.line, styles.mRight]} />
          <Text style={styles.orText}>or</Text>
          <View style={[styles.line, styles.mLeft]} />
        </View>
        <InputComponent placeholder="Full name" />
        {/* <DropdownComponent /> */}
        <Picker
          style={styles.input}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Community name" value="Community name" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>


        <InputComponent placeholder="House number" />
        <InputComponent placeholder="Phone number" />
        {/* <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <TouchableOpacity
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          ></TouchableOpacity> */}
        <InputComponent placeholder="PIN code" />

        <ButtonComponent title="Sign up" onPress={() => { }} />
        <Text style={styles.text}>Already have an account?{"\n"}
          <TouchableOpacity><Link style={styles.link} href="/login">Login</Link></TouchableOpacity></Text>
      </CardComponent>
    </GradientBackgroundComponent>
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
    marginBottom: 20,
    color: "#595959",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#000",
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
