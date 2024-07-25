import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import InsetShadow from 'react-native-inset-shadow'


interface CardProps {
  children: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};


const styles = StyleSheet.create({
  card: {
    padding:34,
    backgroundColor:"#fff",
    height: "85%",
    minHeight: "80%",
    borderRadius: 16,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin: 20,
    marginBottom: 0,
    overflow: 'hidden',
    // alignItems: "center", 
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CardComponent;