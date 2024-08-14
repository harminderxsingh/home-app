import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


interface CardProps {
  children: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  const windowHeight = Dimensions.get('window').height;
  const calculatedHeight = windowHeight - 160;
  return <ScrollView style={[styles.card, {height: calculatedHeight}]}>{children}</ScrollView>;
};


const styles = StyleSheet.create({
  card: {
    padding:34,
    backgroundColor:"#fff",
    // height: "85%",
    minHeight: "80%",
    borderRadius: 16,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    margin: 20,
    marginBottom: 0,
    overflow: 'hidden',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CardComponent;