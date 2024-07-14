import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import SvgLogo from '@/assets/images/bB.svg';  // Adjust the path as necessary
import SvgBurger from '@/assets/images/burger.svg';  // Adjust the path as necessary
import Options from "../options/_layout";
import { AuthContext } from "@/contexts/AuthContext";
import { useBlur } from "@/contexts/BlurContext";


export default function Header() {
    const { visible, setVisible } = useBlur();
    const { userToken } = useContext(AuthContext);
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleButtonClick = () => {
        if (showNewComponent) {
            setTimeout(() => {
                setVisible(true)
            }, 10);
        }
        setShowNewComponent(!showNewComponent);
    };

    return (
        <>
            <View style={[styles.outerGap, styles.flexWithBetween]}>
                <Link href={userToken ? '/dashboard' : '/login' }>
                    <SvgLogo width={30} height={30} />
                </Link>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
                        <SvgBurger width={15} height={15} />
                    </TouchableOpacity>
                </View>
            </View>
            {showNewComponent && <Options />}
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 7,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    flexWithBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    outerGap: {
        marginVertical: 50,
        marginHorizontal:20 
       },
    logo: {
        width: 40,
        height: 40,
    },
});
