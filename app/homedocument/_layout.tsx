
import { Link, router, useFocusEffect } from "expo-router";
import { View, Text } from "react-native";
import { Image, StyleSheet, ScrollView } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useCallback, useState } from "react";
import DocumentBackgroundComponent from "@/components/DocumentBackgroundComponent";
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgBlackBurger from '@/assets/images/blackBurgur.svg';
import SvgFolder from '@/assets/images/folder.svg';
// import SvgFolderOrange from '@/assets/images/folderOrange.svg';
// import SvgFolderSkin from '@/assets/images/folderSkin.svg';
// import SvgFolderLight from '@/assets/images/folderLight.svg';
// import SvgFolderGreen from '@/assets/images/folderGreen.svg';
// import SvgFolderTrash from '@/assets/images/trash.svg';
import { fileService } from "@/services/FileService";


export default function HomeDocument() {
    const [showNewComponent, setShowNewComponent] = useState(false);
    const [folders, setFolders] = useState<any[]>([]);

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };

    useFocusEffect(
        useCallback(() => {
            fileService.folders().then((res) => {
                setFolders(res)
            }).catch((err) => {
                console.log(err)
            })
        }, [])
    );

    const openFolder = (folderId: string) => {
        router.push({
            pathname: 'drawing',
            params: {
                folderId,
            },
        });
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <DocumentBackgroundComponent>


                <View style={{ backgroundColor: "rgba(0,0,0,0)", margin: 20 }}>
                    <View style={[styles.outerGap, styles.flexWithBetween]}>
                        <Link href="/dashboard" >
                            <View style={styles.link}>
                                <SvgLeftArrow />
                            </View>
                        </Link>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={handleButtonClick} >
                                <SvgBlackBurger />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                        <Text style={[styles.title, styles.font24, styles.colorWhite,]} >Home data</Text>
                        <Text style={[styles.font14, styles.colorWhite,]}>6 folders</Text>
                        <View style={{ marginTop: 40, }}>
                            {
                                folders.map(folder =>
                                    <TouchableOpacity key={folder.id} onPress={() => openFolder(folder.id)} style={[styles.btn]} >
                                        <View style={styles.flexrow} >
                                            <View>
                                                <SvgFolder />
                                            </View>
                                            <View style={{ paddingLeft: 20 }}>
                                                <Text style={styles.heading}>
                                                    {folder.name}
                                                </Text>
                                                <Text style={styles.count}>
                                                    {folder.filesCount} Items
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                            {/* <Link href='/ddcHome' style={[styles.btn]}  >
                                <View style={styles.flexrow}>
                                    <View >
                                        <SvgFolderOrange />
                                    </View>
                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Tutorials
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </View>
                            </Link>
                            <Link href='/ddcHome' style={[styles.btn,]}  >
                                <View style={styles.flexrow}>
                                    <View >
                                        <SvgFolderSkin />
                                    </View>

                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Contracts
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </View>
                            </Link>
                            <Link href='/ddcHome' style={[styles.btn,]} >
                                <View style={styles.flexrow}>
                                    <View >
                                        <SvgFolderLight />
                                    </View>

                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Warrenties
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </View>
                            </Link>
                            <Link href='/ddcHome' style={[styles.btn,]}>
                                <View style={styles.flexrow}>
                                    <View >
                                        <SvgFolderGreen />
                                    </View>

                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Miscellaneous
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </View>
                            </Link>
                            <Link href='/ddcHome' style={[styles.btn,]}>
                                <View style={styles.flexrow}>
                                    <View >
                                        <SvgFolderTrash />
                                    </View>

                                    <View style={{ paddingLeft: 20 }}>
                                        <Text style={styles.heading}>
                                            Deleted documents
                                        </Text>
                                        <Text style={styles.count}>
                                            12 Items
                                        </Text>
                                    </View>
                                </View>
                            </Link> */}
                        </View>
                    </View>
                </View>
            </DocumentBackgroundComponent>
            {/* {
                showNewComponent && <DdcHome />
            } */}

        </GestureHandlerRootView>


    );
}
const styles = StyleSheet.create({
    flexrow: {
        flexDirection: "row",
    },
    flexWithBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    outerGap: {
        marginVertical: 20,
    },


    link: {
        width: 30,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(223, 223, 223, 1)',
        padding: 5,
        borderRadius: 50,
    },

    // fontWeight600: {
    //     fontWeight: 600,
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
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        paddingVertical: 18,
        paddingHorizontal: 21,
        backgroundColor: "#F0F0F0",
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