import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import BlurViewComponent from './BlurViewComponent';

interface CardProps {
  children: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  return <BlurViewComponent intensity={20} tint='light' blurReductionFactor={0.5} style={styles.card}>{children}</BlurViewComponent>;
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