import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { Link, router } from "expo-router";
import { View, Text } from "react-native";
import {  StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function UserSetting() {

    return (
        <View style={{ padding: 15, zIndex: 1, width: '100%',height:"100%", backgroundColor: "#F0F0F0" }}>
            <ScrollView  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
                <Text style={styles.title}>User settings</Text>
                <View>
                    <Text style={styles.label}>Full name</Text>
                    <InputComponent placeholder="Anna Alamos" />
                </View>
                <View>
                    <View style={styles.flexBetween}>
                        <Text style={styles.label}>Phone number</Text>
                        <Link href="/signup" style={styles.link} >Edit Phone number</Link>
                    </View>
                    <InputComponent placeholder="9352385 585" />
                </View>
                <View>
                    <View style={styles.flexBetween}>
                        <Text style={styles.label}>Password</Text>
                        <Link href="/signup" style={styles.link}>Edit Password</Link>
                    </View>
                    <InputComponent placeholder="9352385 585" />
                </View>
                <View style={{borderTopWidth:1,marginTop:10,borderTopColor:"#727272"}}>
                    <Text style={{fontWeight:700,color:"#595959",paddingTop:15}}>More info</Text>
                    <Text  style={{fontWeight:400,color:"#595959",lineHeight:24,paddingVertical:10}}>Anna, can we get to know you more for a more personalised experience
                    </Text>
                </View>
                <View>
                    <Text style={styles.label}>Occupation</Text>
                    <InputComponent placeholder="" />
                </View>
                <View>
                    <Text style={styles.label}>Age</Text>
                    <InputComponent placeholder="" />
                </View>
                <View>
                    <Text style={styles.label}>Hobbies</Text>
                    <InputComponent placeholder="" />
                </View>
                <View>
                    <Text style={styles.label} >Number of family members</Text>
                    <InputComponent placeholder="" />
                </View>
                <TouchableOpacity>
                    <ButtonComponent title="Update" onPress={() => { router.push('dashboard') }} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    flexBetween:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
  
    label: {
        fontSize: 16,
        color: '#595959',
        paddingBottom:5,
    },
    
    title: {
        textAlign: "left",
        fontSize: 24,
        marginBottom: 20,
        color: "#595959",
    },
    link: {
        color: "#6E90AC",
        fontSize:12,
    }
});