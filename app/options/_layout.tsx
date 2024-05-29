import CardComponent from "@/components/CardComponent";
import { View, Text } from "react-native";
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import UserSetting from "../userSetting/_layout";
import { useState } from "react";
import { Link } from "expo-router";

export default function Options() {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };


    return (
        <View style={{ position: "absolute", bottom: 0, zIndex: 1, width: '100%', height: '100%' }}>
            <CardComponent>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                    <View>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
                                <Text>User settings</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button}>
                                <Text>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.button2}>
                                <Text>Data privacy</Text>
                                <Image source={require('@/assets/images/arrow.svg')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button2}>
                                <Text>Terms</Text>
                                <Image source={require('@/assets/images/arrow.svg')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button}>
                                <Text>Log out</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.hidden}>
                                <Text></Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.hidden}>
                                <Text></Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.hidden}>
                                <Text></Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.hidden}>
                                <Text></Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.hidden}>
                                <Text></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.textCenter}>Version 0.9.1</Text>
                            <View style={[styles.flexCenter, { marginVertical: 5 }]}>
                                <Text>App by</Text>
                                <Image source={require('@/assets/images/bB_logo.png')} />
                            </View>
                            <Text style={styles.textCenter}>billionbricks.org</Text>
                        </View>
                    </View>
                </View>
            </CardComponent>
            {showNewComponent && <UserSetting />}
        </View>
    );
}
const styles = StyleSheet.create({
    hidden:{
       opacity:5,
       paddingVertical: 12,
    },
    flexCenter: {
        flexDirection: "row",
        justifyContent: "center",
    },
    textCenter: {
        textAlign: 'center',
    },
    button: {
        paddingVertical: 12,
        textAlign: 'left',
        borderBottomWidth: 1,
        borderBottomColor: '#727272',
        color: "#595959",
    },
    button2: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 7,
        textAlign: 'left',
        color: "#595959",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    outerGap: {
        margin: 20,
    },
    logo: {
        width: 40,
        height: 40,
    },

});