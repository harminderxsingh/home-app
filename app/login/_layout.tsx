import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, useNavigation, router } from "expo-router";

export default function Login() {
  return (
    <GradientBackgroundComponent>
      <CardComponent>
        <Text style={styles.title}>Log in</Text>
        <ButtonComponent title="Sign up with Facebook" onPress={() => {}} />
        <Text style={styles.orText}>or</Text>
        <InputComponent placeholder="Community name" />
        <InputComponent placeholder="House number" />
        <InputComponent placeholder="PIN code" />
        <ButtonComponent title="Log in" onPress={() => {router.push('dashboard')}} />

        <Text style={styles.text}>
          Don’t have an account?{"\n"}
          <TouchableOpacity>
            <Link href="/signup" style={styles.link}>
              Sign up
            </Link>
          </TouchableOpacity>
        </Text>
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
