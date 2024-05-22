import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import {
  ImageBackground,
  StyleSheet,
  ImageBackgroundProps,
  View,
  Text,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface HomeBackgroundComponentProps extends ImageBackgroundProps {
  children: ReactNode;
}

const HomeBackgroundComponent: React.FC<
  HomeBackgroundComponentProps
> = ({ children, ...props }) => {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("../assets/images/bg/2.png")}
        style={styles.backgroundImage}
        {...props}
      >
        <LinearGradient
          colors={[
            "transparent",
            "transparent",
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradient}
        >
          {children}
        </LinearGradient>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

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
  },
});

export default HomeBackgroundComponent;
