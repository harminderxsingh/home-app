
import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgAddIcon from '@/assets/images/addIcon.svg';
import SvgCamera from '@/assets/images/camera.svg';
import SvgImageOutline from '@/assets/images/imgOutline.svg';
import SvgUploadArrow from '@/assets/images/uploadArrow.svg';
import SvgBurgerIcon from '@/assets/images/blackBurgur.svg';
import SvgVideo from '@/assets/images/video.svg';
import SvgImage from '@/assets/images/image.svg';
import SvgPdf from '@/assets/images/pdf.svg';
import SvgAdd from '@/assets/images/add.svg';


export default function Drawing() {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <View style={{ flexDirection: "column", justifyContent: "space-between", backgroundColor: "rgba(240, 240, 240, 1)", height: "100%" }}>
                <View>

                    <View style={[styles.outerGap, styles.flexWithBetween]}>
                        <Link href="/homedocument" >
                            <View style={styles.link}>
                                <SvgLeftArrow />
                            </View>
                        </Link>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={handleButtonClick} >
                                <SvgBurgerIcon />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ backgroundColor: "rgba(0,0,0,0)", margin: 20 }}>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                            <Text style={[styles.title, styles.font24,]} >Contracts</Text>
                            <Text style={[styles.font14, { color: "rgba(121, 101, 101, 0.8)" }]}>8 Scaned files</Text>
                            <View style={{ marginTop: 40, }}>

                                <Link href='/drawing' style={[styles.btn,]} >
                                    <SvgVideo />
                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Floorplans
                                            and drawing
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </Link>
                                <Link href='/ddcHome' style={[styles.btn,]} >
                                    <SvgImage />
                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Manual and Tutorials
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </Link>
                                <Link href='/ddcHome' style={[styles.btn,]}  >
                                    <SvgPdf />
                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Contracts
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </Link>
                                <Link href='/ddcHome' style={[styles.btn,]} >
                                    <SvgAdd />
                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Warrenties
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </Link>
                            </View>
                        </View>
                    </View>
                </View>
                <View   >
                    {showNewComponent
                        &&
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#fff", marginHorizontal: 80, paddingVertical: 14, borderRadius: 10, marginBottom: 7 }}>
                            <View >
                                <TouchableOpacity>
                                    <SvgCamera />
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity>
                                    <SvgImageOutline />
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity>
                                    <SvgUploadArrow />
                                </TouchableOpacity>
                            </View>

                        </View>
                    }

                    <View style={styles.addButton}>
                        <TouchableOpacity onPress={handleButtonClick} >
                            <SvgAddIcon />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </GestureHandlerRootView>


    );
}
const styles = StyleSheet.create({
    addButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 14
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

    link: {
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 5,
        borderRadius: 50,
    },

    // fontWeight600: {
    // fontWeight: 600,
    // },
    button: {
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    btn: {
        width: "100%",
        paddingVertical: 18,
        paddingHorizontal: 21,
        backgroundColor: "#fff",
        borderRadius: 8,
        fontSize: 20,
        // fontWeight: 600,
        flexDirection: "row",
        alignItems: "center",
        color: "#292828",
        marginBottom: 12,
    },
    heading: {
        fontSize: 14,
        color: "#595959",
        // fontWeight: 600,
    },
    count: {
        fontSize: 10,
        color: "rgba(89, 89, 89, 0.5)",
        opacity: 50,
        // fontWeight: 600,
    },
    colorWhite: {
        color: '#fff',
    },
    font24: {
        fontSize: 24,
    },
    font20: {
        fontSize: 20,
    },
    font14: {
        fontSize: 14,
    },
    title: {
        textAlign: "left",
        fontSize: 24,
        color: "#595959",
    },
});