
import { Link, router, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as SecureStore from 'expo-secure-store';
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgAddIcon from '@/assets/images/addIcon.svg';
import SvgCamera from '@/assets/images/camera.svg';
import SvgImageOutline from '@/assets/images/imgOutline.svg';
import SvgUploadArrow from '@/assets/images/uploadArrow.svg';
import SvgBurgerIcon from '@/assets/images/blackBurgur.svg';
import SvgAdd from '@/assets/images/icons/b-doc.svg';
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { fileService } from "@/services/FileService";
import { formatDate } from "date-fns";

const { extra } = Constants.expoConfig || {};
const gviewSupportedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain',
    'application/rtf',
    'image/png',
    'image/jpeg',
    'image/gif',
  ];

export default function Drawing() {
    const { folderId } = useLocalSearchParams<{ folderId: string }>();
    const [showNewComponent, setShowNewComponent] = useState(false);
    const [folder, setFolder] = useState<any>({ files: [] });

    useEffect(() => {
        loadData()
    }, [folderId])

    const loadData = () => {
        if (folderId) {
            fileService.filesByFolders(folderId).then(res => {
                setFolder(res)
            })
        }
    }

    const handleButtonClick = () => {
        setShowNewComponent(!showNewComponent);
    };

    const openFile = (file: any) => {
        const url = `${extra?.baseUrl}${file.path}`;
        console.log(url)
        if (gviewSupportedMimeTypes.includes(file.mimetype)) {
            router.push({
                pathname: 'fileviewer',
                params: {
                    mimetype: file.mimetype,
                    url,
                },
            });
        }
    }

    const pickCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Camera permission is required!');
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            allowsMultipleSelection: false,
        });
        if (!result.canceled) {
            uploadFile(result.assets[0]);
        }
    };

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({ multiple: false });
        console.log(result)
        if (!result.canceled) {
            uploadFile(result.assets[0]);
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            allowsMultipleSelection: false,
        });
        if (!result.canceled) {
            uploadFile(result.assets[0]);
        }
    }
    const uploadFile = async (file: any) => {

        try {
            setShowNewComponent(false)
            const token = await SecureStore.getItemAsync('userToken');
            const response = await FileSystem.uploadAsync(`${extra?.baseUrl}/file`, file.uri, {
                httpMethod: 'POST',
                uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                fieldName: 'file',
                parameters: {
                    name: file.name ?? file.uri.split('/').pop(),
                    folderId: folderId ?? '',
                },
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
            } else {
            }
        } catch (error) {
            console.error(error);
        } finally {
            loadData()
        }
    };
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#D1D1D1"></StatusBar>

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
                            <Text style={[styles.title, styles.font24,]} >{folder.folderName}</Text>
                            <Text style={[styles.font14, { color: "rgba(121, 101, 101, 0.8)" }]}>{folder.files?.length} Scaned files</Text>
                            <View style={{ marginTop: 40, }}>

                                {
                                    folder.files.map((file: any) =>
                                        <TouchableOpacity key={file.id} onPress={() => openFile(file)} style={[styles.btn,]} >
                                            <SvgAdd />
                                            <View style={{ paddingLeft: 20 }}>
                                                <Text style={styles.heading}>
                                                    {file.originalName}
                                                </Text>
                                                <Text style={styles.count}>
                                                    {formatDate(file.createdAt, 'MM/dd/yyyy')}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                                {/* <Link href='/ddcHome' style={[styles.btn,]} >
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
                                </Link> */}
                            </View>
                        </View>
                    </View>
                </View>
                <View   >
                    {showNewComponent
                        &&
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#fff", marginHorizontal: 80, paddingVertical: 14, borderRadius: 10, marginBottom: 7 }}>
                            <View >
                                <TouchableOpacity onPress={pickCamera}>
                                    <SvgCamera />
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity onPress={pickImage}>
                                    <SvgImageOutline />
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity onPress={pickDocument}>
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
        marginTop: 50,
        marginHorizontal: 20
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