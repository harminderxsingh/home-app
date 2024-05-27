import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    height:"auto",
    backgroundColor: "#F0F0F0",
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