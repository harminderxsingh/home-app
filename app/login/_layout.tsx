import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import CardComponent from "@/components/CardComponent";
import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { Link, router } from "expo-router";
import Header from "../header/_layout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgUserIcon from '@/assets/images/userIcon.svg';

export default function Login() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GradientBackgroundComponent>
        <Header />
        <CardComponent>
          <View style={{flexDirection: "column", height: "85%", justifyContent: "space-between" }}>
            <View>
              <Text style={styles.title}>Log in</Text>
              <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                <SvgUserIcon />
              </View>
             
              <View style={{ height: 1, backgroundColor: "#323232", marginVertical: 50 }}></View>
              <InputComponent placeholder="Community name" />
              <InputComponent placeholder="House number" />
              <InputComponent placeholder="PIN code" />
            </View>
          </View>
          <View>

            <ButtonComponent title="Log in" onPress={() => { router.push('dashboard') }} />

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
