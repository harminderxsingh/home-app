import CardComponent from "@/components/CardComponent";
import { View, Text } from "react-native";
import { Image, StyleSheet, ToastAndroid } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useContext, useState } from "react";
import { Link, router } from "expo-router";
import { AuthContext } from "@/contexts/AuthContext";
import DelayedLink from "@/components/DelayedLink";
import useDelayedNavigation from "@/components/useDelayedNavigation";

export default function Options() {

    const delayedNavigate = useDelayedNavigation();
    const { logout } = useContext(AuthContext);
    const [showNewComponent, setShowNewComponent] = useState(false);
    const showToast = (msg: any = "Logout Successfully") => {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    };
    const handleButtonClick = () => {
        delayedNavigate('userSetting')
        setShowNewComponent(!showNewComponent);
    };


    return (
        <View style={{ position: "absolute", bottom: 0, zIndex: 1, width: '100%', height: '100%' }}>
            <CardComponent>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                    <View>
                        <View>
                            <TouchableOpacity onPress={handleButtonClick}>
                                <Text style={styles.textColor}>User settings</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{paddingBottom:10}} >
                                    <DelayedLink href="/notificationsetting" style={styles.textColor}>
                                        Notification settings
                                    </DelayedLink>
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{paddingVertical:20}}>
                                    <DelayedLink href="/about" style={[styles.textColor]}>
                                        About
                                    </DelayedLink>
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.button2}>
                                <Text style={styles.textColor}>Data privacy</Text>
                                <Image source={require('@/assets/images/arrow.svg')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button2}>
                                <Text style={styles.textColor}>Terms</Text>
                                <Image source={require('@/assets/images/arrow.svg')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={logout}>
                                <Text style={[styles.textColor,{paddingVertical:20}]}>Log out</Text>
                            </TouchableOpacity>
                        </View>
                       
                    
                    </View>
                    <View>
                        <View>
                            <Text style={styles.textCenter}>Version 0.9.1</Text>
                            <View style={[styles.flexCenter, { marginVertical: 5 }]}>
                                <Text style={{color:'#595959'}}>App by</Text>
                                <Image source={require('@/assets/images/bB_logo.png')} />
                            </View>
                            <Text style={styles.textCenter}>billionbricks.org</Text>
                        </View>
                    </View>
                </View>
            </CardComponent>
            {/* {showNewComponent && <UserSetting />} */}
        </View>
    );
}
const styles = StyleSheet.create({
    textColor: {
        color: '#595959',
        fontSize:24,
    },
    hidden: {
        opacity: 5,
        paddingVertical: 12,
    },
    flexCenter: {
        flexDirection: "row",
        justifyContent: "center",
    },
    textCenter: {
        textAlign: 'center',
        color:'#595959',
    },
    button: {
        paddingVertical: 12,
        textAlign: 'left',
        borderBottomWidth: 1,
        borderBottomColor: '#595959',
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