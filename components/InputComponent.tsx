import React, { forwardRef, RefObject } from 'react';
import { TextInput, StyleSheet, TextStyle, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  name?: string;
  placeholder: string;
  inputStyle?: TextStyle;
  onInput?: (input: { value: string, name?: string }) => void;
}

const InputComponent = forwardRef<TextInput, InputProps>(({ name, inputStyle, onInput, ...rest }, ref) => {
  return (
    <TextInput
      ref={ref}
      style={[styles.input, inputStyle]}
      onChangeText={(res) => onInput && onInput({ name, value: res })}
      {...rest}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: '#f0f0f0',
    borderColor:"#595959",
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
