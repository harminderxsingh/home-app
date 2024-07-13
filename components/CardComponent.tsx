// import { BlurView } from 'expo-blur';
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { BlurView } from "@react-native-community/blur";

import type { BlurViewProps } from "expo-blur";
import { BlurView } from "expo-blur";
import getBackgroundColor from "expo-blur/build/getBackgroundColor";
import * as React from "react";
import { Platform, View, StyleSheet } from "react-native";

class LegacyAndroidBlurView extends React.Component<BlurViewProps> {
  render() {
    const { tint = "default", intensity = 50, style, ...props } = this.props;
    const backgroundColor = getBackgroundColor(intensity, tint);
    return <View {...props} style={[style, { backgroundColor }]} />;
  }
}

export const PBlurView: React.FC<BlurViewProps> | typeof LegacyAndroidBlurView =
  Platform.OS === "ios" ? BlurView : LegacyAndroidBlurView;


interface CardProps {
  children: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  // return <BlurView blurType="light" blurAmount={10}
  // reducedTransparencyFallbackColor="white" 
  // style={styles.card}>{children}</BlurView>;
  return <PBlurView style={styles.card}>{children}</PBlurView>;
};

const styles = StyleSheet.create({
  card: {
    height: "85%",
    minHeight: "80%",
    // backgroundColor: "rgba(240, 240, 240, 0.64)",
    padding: 34,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin: 20,
    marginBottom: 0,
    // alignItems: "center", 
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CardComponent;