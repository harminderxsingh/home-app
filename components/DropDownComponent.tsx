// ButtonComponent.tsx
import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

import AntDesign from '@expo/vector-icons/AntDesign';
interface DropdownItem {
    label: string;
    value: string;
  }
  interface DropdownProps {
    data: DropdownItem[]; // Specify that data is an array of DropdownItem
  }
  
const data :DropdownItem[] = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
const DropdownComponent :React.FC<DropdownProps> =({ data }) => {
    const [value, setValue] = useState<string | null>(null);

  return (
    <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    data={data}
    search
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder="Select item"
    searchPlaceholder="Search..."
    value={value}
    onChange={item => {
      setValue(item.value);
    }}
    renderLeftIcon={() => (
      <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
    )}
  />
  );
};

const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
export default DropdownComponent;
