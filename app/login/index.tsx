import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import ButtonComponent from '@/components/ButtonComponent';
import InputComponent from '@/components/InputComponent';
import CardComponent from "@/components/CardComponent";

export default function App() {
  return (
    <ImageBackground
      source={require("@/assets/images/bg/1.jpg")}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(90, 117, 144, 0.5)', 'transparent', 'transparent', 'rgba(3, 47, 72, 0.5)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.logoContainer}>
          <Icon name="home" type="font-awesome" color="#fff" size={30} />
        </View>
        <View style={styles.menuContainer}>
          <Icon name="menu" color="#fff" size={30} />
        </View>
        <CardComponent>
          <Text style={styles.title}>Log in</Text>
          <ButtonComponent title="Google Login" onPress={() => {}} />
          <Text style={styles.orText}>or</Text>
          <InputComponent placeholder="Community name" />
          <InputComponent placeholder="House number" />
          <InputComponent placeholder="PIN code" />
          <ButtonComponent title="Log in" onPress={() => {}} />
          <TouchableOpacity>
            <Text style={styles.signUpText}>Don’t have an account? Sign up</Text>
          </TouchableOpacity>
        </CardComponent>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  menuContainer: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
    color: '#595959'
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#888",
  },
  signUpText: {
    color: "#1E90FF",
    textAlign: "center",
    marginTop: 10,
  },
});
