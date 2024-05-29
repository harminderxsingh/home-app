
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";
import { Image, StyleSheet, ScrollView } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import SvgLeftArrow from '@/assets/images/leftArrow.svg';
import SvgWarning from '@/assets/images/warning.svg';
import SvgCloudSon from '@/assets/images/cloudSon.svg'
import SvgElectric from '@/assets/images/electric.svg';
import SvgWatch from '@/assets/images/watch.svg';
import SvgDb from '@/assets/images/db.svg';
import SvgMeter from '@/assets/images/meter.svg';
import SvgBrownSetting from '@/assets/images/brownSetting.svg';
export default function DdcHome() {
    const [selectedSection, setSelectedSection] = useState('overview');

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ zIndex: 1, width: '100%', height: "100%", backgroundColor: "#F3F3F3" }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20, paddingHorizontal: 15, }}>
                    <Link href="/homedata" style={styles.link}>
                        <SvgLeftArrow />
                    </Link>
                    <Text style={styles.title}>DDC Home</Text>
                    <Link href="/homedata" style={[styles.link, { opacity: 0 }]}>
                        <Image

                            source={require('@/assets/images/leftArrow.svg')}
                        />
                    </Link>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#fff", paddingTop: 10, paddingBottom: 2 }}>
                    <TouchableOpacity onPress={() => setSelectedSection('overview')}>
                        <Text style={[selectedSection === 'overview' ? styles.selectedOption : styles.normalText]}>
                            Overview
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedSection('devices')}>
                        <Text style={[selectedSection === 'devices' ? styles.selectedOption : styles.normalText,]}>Devices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedSection('details')}>
                        <Text style={[selectedSection === 'details' ? styles.selectedOption : styles.normalText,]}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {selectedSection === 'overview' && (
                        <ScrollView showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}>
                            <View style={{ paddingVertical: 21, paddingHorizontal: 25 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#E1F4E7", paddingVertical: 4, paddingHorizontal: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                    <SvgWarning />
                                    <Text style={{ color: "#68C592", fontSize: 10, }}>Your power plant is operating normally, please rest assured to use it</Text>
                                </View>
                                <View style={{ backgroundColor: "#fff", paddingVertical: 18, paddingHorizontal: 15, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                                        <SvgCloudSon />
                                        <Text style={{ color: "#5E5C5C", fontSize: 12, fontWeight: 500 }}>Paranaque 30’C Few Clouds</Text>

                                    </View>
                                </View>


                                <View style={{ backgroundColor: "#fff", paddingVertical: 12, paddingHorizontal: 13, borderRadius: 10, marginTop: 17 }}>
                                    <View style={styles.grid}>
                                        <View style={[styles.item, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#FEF3EB", }]}>
                                            <View>
                                                <Text style={{ color: "#9E9E9E", fontSize: 11, fontWeight: 500 }}>E-today(kWh)</Text>
                                                <Text style={{ color: "#000", fontSize: 16, fontWeight: 600 }}>4.02</Text>
                                            </View>
                                            <View>
                                                <SvgElectric />

                                            </View>
                                        </View>
                                        <View style={[styles.item, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#FEF3EB" }]}>
                                            <View>
                                                <Text style={{ color: "#9E9E9E", fontSize: 11, fontWeight: 500 }}>E-this month(kWh)</Text>
                                                <Text style={{ color: "#000", fontSize: 16, fontWeight: 600 }}>4.02</Text>
                                            </View>
                                            <View>
                                                <SvgWatch
                                                    style={{ marginEnd: 8 }}
                                                />

                                            </View>
                                        </View>

                                    </View>
                                    <View style={[styles.grid, { marginTop: 10 }]}>
                                        <View style={[styles.item, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#FEF3EB", }]}>
                                            <View>
                                                <Text style={{ color: "#9E9E9E", fontSize: 11, fontWeight: 500 }}>E-this year(MWh)</Text>
                                                <Text style={{ color: "#000", fontSize: 16, fontWeight: 600 }}>4.02</Text>
                                            </View>
                                            <View>
                                                <SvgWatch
                                                    style={{ marginEnd: 8 }}
                                                />
                                            </View>
                                        </View>
                                        <View style={[styles.item, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#FEF3EB" }]}>
                                            <View>
                                                <Text style={{ color: "#9E9E9E", fontSize: 11, fontWeight: 500 }}>E-total(MWh)</Text>
                                                <Text style={{ color: "#000", fontSize: 16, fontWeight: 600 }}>4.02</Text>
                                            </View>
                                            <View>
                                                <SvgDb />

                                            </View>
                                        </View>

                                    </View>
                                </View>

                                <View style={{ backgroundColor: "#fff", paddingVertical: 12, paddingHorizontal: 13, borderRadius: 10, marginTop: 17 }}>

                                    <View style={[styles.grid, { marginTop: 10 }]}>
                                        <View style={[styles.item, { flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }]}>
                                            <View>
                                                <Text style={{ color: "#9E9E9E", fontSize: 11, fontWeight: 500 }}>E-this year(MWh)</Text>
                                                <Text style={{ color: "#000", fontSize: 16, fontWeight: 600 }}>4.02</Text>
                                            </View>
                                            <View style={styles.bgCircle}>
                                                <SvgMeter />

                                            </View>
                                        </View>
                                        <View style={[styles.item, { flexDirection: "row-reverse", alignItems: "center", justifyContent: "space-between", }]}>
                                            <View>
                                                <Text style={{ color: "#9E9E9E", fontSize: 11, fontWeight: 500 }}>E-total(MWh)</Text>
                                                <Text style={{ color: "#000", fontSize: 16, fontWeight: 600 }}>4.02</Text>
                                            </View>
                                            <View style={styles.bgCircle}>
                                                <SvgBrownSetting />
                                            </View>
                                        </View>

                                    </View>
                                </View>



                            </View>


                        </ScrollView>
                    )}
                    {selectedSection === 'devices' && (
                        <View>
                            <Text>Device Box</Text>
                        </View>
                    )}
                    {selectedSection === 'details' && (
                        <View>
                            <Text>Details Box</Text>
                        </View>
                    )}
                </View>


            </View>
        </GestureHandlerRootView>

    );
}
const styles = StyleSheet.create({
    bgCircle: {
        backgroundColor: "#FEF3EB",
        borderRadius: 50,
        height: 40,
        width: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    grid: {
        flex: 1,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    item: {
        width: '48%',
        padding: 5,
    },
    box: {
        fontSize: 21,
        fontWeight: 600,
        height: 132,
        backgroundColor: '#F4B081',
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom: 12,
        paddingLeft: 9,
        borderRadius: 10,
        color: "#404040",

    },
    selectedOption: {

        color: "#D66E2B",
        fontWeight: 600,
        fontSize: 14,
        borderBottomColor: "#D66E2B",
        borderBottomWidth: 2,
        paddingVertical: 5,
    },
    normalText: {
        color: "#5E5C5CCC",
        paddingVertical: 5,
        fontWeight: 600,
        fontSize: 14,
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        color: "#595959",
    },
    link: {
        width: 30,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#DFDFDF',
        padding: 5,
        borderRadius: 50,
    },

});