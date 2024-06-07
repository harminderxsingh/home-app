// InputComponent.tsx
import React from 'react';
import { TextInput, StyleSheet, TextStyle } from 'react-native';

interface InputProps {
  name?: string;
  placeholder: string;
  inputStyle?: TextStyle;
  onInput?: (input: { value: string, name?: string }) => void
}

const InputComponent: React.FC<InputProps> = ({ name, placeholder, inputStyle, onInput }) => {
  return <TextInput style={[styles.input, inputStyle]} onChangeText={res => onInput && onInput({ name, value: res })} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
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
