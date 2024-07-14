import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

interface CardProps {
  children: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  return <BlurView intensity={50} tint='light' blurReductionFactor={1} experimentalBlurMethod='dimezisBlurView' style={styles.card}><View>{children}</View></BlurView>;
};


const styles = StyleSheet.create({
  card: {
    height: "85%",
    minHeight: "80%",
    padding: 34,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin: 20,
    marginBottom: 0,
    overflow: 'hidden',
    // alignItems: "center", 
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CardComponent;