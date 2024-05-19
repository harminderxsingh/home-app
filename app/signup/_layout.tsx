import React from "react";
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

export default function Signup() {
  return (
    <GradientBackgroundComponent>
      <CardComponent>
        <Text style={styles.title}>Sign up</Text>
        <ButtonComponent title="Log in with Facebook" onPress={() => {}} />
        <Text style={styles.orText}>or</Text>
        <InputComponent placeholder="Full name" />
        <InputComponent placeholder="House number" />
        <InputComponent placeholder="Password" />
        <ButtonComponent title="Sign up" onPress={() => {}} />
          <Text style={styles.text}>Already have an account?{"\n"}
          <TouchableOpacity><Link style={styles.link} href="/login">Login</Link></TouchableOpacity></Text>
      </CardComponent>
    </GradientBackgroundComponent>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
    color: "#595959",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#888",
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
