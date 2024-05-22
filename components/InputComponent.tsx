// InputComponent.tsx
import React from 'react';
import { TextInput, StyleSheet, TextStyle } from 'react-native';

interface InputProps {
  placeholder: string;
  inputStyle?: TextStyle;
}

const InputComponent: React.FC<InputProps> = ({ placeholder, inputStyle }) => {
  return <TextInput style={[styles.input, inputStyle]} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  input: {
    width:"100%",
    backgroundColor: '#fff',
    borderWidth: 0,
    padding: 13,
    borderRadius: 12,
    marginBottom: 14,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#595959',
  },
});

export default InputComponent;
