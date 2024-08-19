import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
import SvgLogo from '@/assets/images/bB.svg';  // Adjust the path as necessary
import SvgBurger from '@/assets/images/burger.svg';  // Adjust the path as necessary
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgCross from '@/assets/images/cross.svg';
import Options from "../options/_layout";
import { AuthContext } from "@/contexts/AuthContext";
// import { useBlur } from "@/contexts/BlurContext";


export default function Header({ isBack = false }) {
    // const { visible, setVisible } = useBlur();
    const router = useRouter()
    const { userToken } = useContext(AuthContext);
    const [showNewComponent, setShowNewComponent] = useState(false);

    return (
        <>
            <View style={[styles.outerGap, styles.flexWithBetween]}>
                {isBack ?
                    <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                        <SvgLeftArrow width={12} height={12} />
                    </TouchableOpacity>
                    :
                    <Link href={userToken ? '/dashboard' : '/login'}>
                        <SvgLogo width={30} height={30} />
                    </Link>
                }
                <View>
                    <TouchableOpacity style={isBack ? styles.button2 : styles.button} onPress={() => setShowNewComponent(!showNewComponent)}>
                        {showNewComponent
                        ? <SvgCross width={15} height={15} />
                        : <SvgBurger width={15} height={15} />}
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    button2: {
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    back: {
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 5,
        borderRadius: 50,
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
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20
    },
    logo: {
        width: 40,
        height: 40,
    },
});
