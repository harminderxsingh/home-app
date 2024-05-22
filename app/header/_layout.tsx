import { useState } from "react";
import { View, } from "react-native";
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Options from "../options/_layout";
import { Link } from "expo-router";

export default function Header() {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };
    return (
        <>
        
        <View style={[styles.outerGap, styles.flexWithBetween]}>
            <Link href="/dashboard">
                <Image
                    style={styles.logo}
                    source={require('@/assets/images/bB.svg')}
                />
            </Link>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleButtonClick} >
                    <Image

                        source={require('@/assets/images/burger.svg')}
                    />
                </TouchableOpacity>
            </View>

        </View>
            {showNewComponent && <Options/>}
        </>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding:10,
        borderRadius:10,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    flexWithBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    outerGap: {
        margin: 20,
    },
    logo: {
        width: 40,
        height: 40,
    },

});