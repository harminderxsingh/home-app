import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, router } from "expo-router";

export default function Login() {
  return (
    <GradientBackgroundComponent>
      <CardComponent>
        <Text style={styles.title}>Log in</Text>
        <ButtonComponent title="Sign up with Facebook" onPress={() => { }} />
        <View style={styles.orTextContainer}>
          <View style={[styles.line,styles.mRight]} />
          <Text style={styles.orText}>or</Text>
          <View style={[styles.line,styles.mLeft]} />
        </View>
        <InputComponent placeholder="Community name" />
        <InputComponent placeholder="House number" />
        <InputComponent placeholder="PIN code" />
        <ButtonComponent title="Log in" onPress={() => { router.push('dashboard') }} />

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
  orTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
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
