// ButtonComponent.tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#4F749A",
    borderRadius: 16,
    alignItems: "center",
    height: 48,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default ButtonComponent;
