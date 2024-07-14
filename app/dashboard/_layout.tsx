import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import BlurViewComponent from "@/components/BlurViewComponent";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Header from "../header/_layout";

import SvgSetting from '@/assets/images/setting.svg';
import SvgArrow from '@/assets/images/rightArrw.svg';
import SvgGreenDot from '@/assets/images/greenDot.svg'
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import axios from "axios";
import InputComponent from "@/components/InputComponent";
import useDelayedNavigation from "@/components/useDelayedNavigation";
import DelayedLink from "@/components/DelayedLink";


export default function RootLayout() {
  const delayedNavigate = useDelayedNavigation();

  const { user } = useContext(AuthContext);

  return (
    <GradientBackgroundComponent>
      <GestureHandlerRootView style={{ flex: 1 }}>

        <Header />
        <View style={styles.outerGap}>
          <TextInput style={[styles.font24, styles.fontWight600, styles.hideCursor]} >
            Welcome home {user?.fullName}
          </TextInput>
          <Text style={[styles.font14, styles.fontWight600, styles.textWhite, { marginBottom: 10 }]}>
            Uni t 22, Nara St. BillionBricks Tartac
          </Text>
          <BlurViewComponent
            intensity={50} tint='light' blurReductionFactor={1} 

            style={[
              styles.notification,
              styles.upperGap14,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <View>
              <SvgSetting height={18} width={20} />
            </View>
            <Text style={[styles.font14, styles.textGray]}>
              {" "}
              Today is 2BC with a high chance of rain
            </Text>
          </BlurViewComponent>
          <View style={[styles.upperGap10]}>
            <BlurViewComponent
              intensity={50} tint='light' blurReductionFactor={1} 

              style={styles.notification}>
              <Text
                style={[styles.font16, styles.fontWight600, styles.textGray, { marginBottom: 10 }]}
              >
                Notifications
              </Text>
              <View
                style={[
                  styles.bgPink,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={[styles.font11, styles.textWhite, { paddingStart: 8 }]}
                >
                  TYPHOON CARINAL: Reaching Larsen in 7 hours{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    // backgroundColor: "#C6C6C6",
                    padding: 5,
                    marginEnd: 3,
                    borderRadius: 50,
                    height: 20,
                    width: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <SvgArrow />
                </TouchableOpacity>
              </View>
              <DelayedLink href="/notificationsetting" style={[styles.font13, styles.textGray, styles.upperGap14]}>
                <View style={styles.rightGap}>
                  <SvgGreenDot />
                </View>
                <Text >
                  Set Solar and septic tank alerts {">"}
                </Text>
              </DelayedLink>
              <DelayedLink href="/contact" style={[styles.font13, styles.textGray, styles.upperGap14]}>
                <View style={styles.rightGap}>
                  <SvgGreenDot />
                </View>
                <Text >
                  Solar panel maintenance time in 12 days. {">"}
                </Text>
              </DelayedLink>
              <Text style={[styles.font13, styles.textGray, styles.upperGap14]}>
                <View style={styles.rightGap}>
                  <SvgGreenDot />
                </View>
                <Text >
                  Septic tank maintenance time in 30 days. {">"}
                </Text>
              </Text>
              <View>
                <Text
                  style={[
                    styles.font14,
                    styles.textGray,
                    styles.upperGap14,
                    styles.textEnd,
                  ]}
                >
                  More alerts...
                </Text>
              </View>
            </BlurViewComponent>
          </View>
          <View style={styles.grid}>
            <View style={[styles.item, styles.upperGap10]}>
              <BlurViewComponent intensity={50} tint='light' blurReductionFactor={1} 
                style={[styles.box]}
              >
                <TouchableOpacity onPress={() => { delayedNavigate('/homedata') }}  >

                  <Text style={[
                    styles.textGray,
                    styles.font21,
                    styles.fontWight600,
                    { width: 60 },
                  ]}>
                    Home Data
                  </Text>
                </TouchableOpacity>
              </BlurViewComponent>
              <BlurViewComponent intensity={50} tint='light' blurReductionFactor={1} 

                style={[styles.boxFixed, styles.upperGap10]}>
                <TouchableOpacity onPress={() => { delayedNavigate('/updates') }} style={{ flexDirection: 'row', justifyContent: "flex-end" }}>
                  <Text
                    style={[
                      styles.font14,
                      styles.upperEnd,
                      styles.textWhite,
                      styles.fontWight600,
                      {
                        marginTop: 9,
                        marginRight: 8,
                        height: 25,
                        width: 25,
                        paddingTop: 2,
                        paddingRight: 7,
                        fontSize: 17,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                      },
                    ]}
                  >
                    7
                  </Text>
                </TouchableOpacity>
                <DelayedLink
                  href="/updates"
                  style={[
                    styles.textGray,
                    styles.font21,
                    styles.fontWight600,
                    { width: 80 },
                  ]}
                >
                  Billion Bricks Update
                </DelayedLink>
              </BlurViewComponent>

            </View>
            <View style={[styles.item, styles.upperGap10]}>
              <BlurViewComponent intensity={50} tint='light' blurReductionFactor={1} 
              style={[styles.box]}
              >
                <TouchableOpacity onPress={() => { delayedNavigate('/homedocument') }} >
                  <Text
                    style={[
                      styles.textGray,
                      styles.font21,
                      styles.fontWight600,
                      { width: 110 },
                    ]}
                  >
                    Home Documnets
                  </Text>
                </TouchableOpacity>
              </BlurViewComponent>
              <BlurViewComponent intensity={50} tint='light' blurReductionFactor={1} 
             style={[
              styles.box,
              styles.upperGap10,
            ]}
              >
              <TouchableOpacity
                onPress={() => { delayedNavigate('/chat') }}
                
              >
                <Text
                  style={[
                    styles.textGray,
                    styles.font21,
                    styles.fontWight600,
                    { width: 110 },
                  ]}
                >
                  Home
                  Assistance
                </Text>
              </TouchableOpacity>
              </BlurViewComponent>
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </GradientBackgroundComponent>
  );
}
const styles = StyleSheet.create({
  hideCursor: {
    color: 'transparent',
    textShadowColor: 'white', // Shadow color
    textShadowOffset: { width: 0, height: 2 }, // Shadow offset
    textShadowRadius: .1,
  },
  rightGap: {
    paddingRight: 5,
  },
  w100: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 9,
    paddingTop: 9,
  },
  upperEnd: {
    textAlign: "right",
    paddingRight: 9,
    backgroundColor: "red",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
  },

  grid: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  item: {
    width: "48%",
  },
  boxFixed: {
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 21,
    fontWeight: 600,
    height: 132,
    overflow: 'hidden',
    paddingBottom: 12,
    paddingLeft: 9,
    borderRadius: 10,
    color: "#fff",

  },
  box: {
    fontSize: 21,
    fontWeight: 600,
    height: 132,
    overflow: 'hidden',
    // backgroundColor: "#F4B081",
    width: "100%",
    justifyContent: "flex-end",
    paddingBottom: 12,
    paddingLeft: 9,
    borderRadius: 10,
    color: "#404040",
  },
  box2: {
    fontSize: 21,
    fontWeight: 600,
    height: 132,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "transparent",
  },
  outerGap: {
    marginHorizontal: 20,
    marginBottom: 50,
    position: "absolute",
    bottom: 10,
  },
  upperGap10: {
    marginTop: 10,
  },
  upperGap14: {
    marginTop: 14,
  },
  upperGap16: {
    marginTop: 16,
  },
  textWhite: {
    color: "#fff",
  },
  fontWight600: {
    fontWeight: "600",
  },
  font21: {
    fontSize: 21,
  },
  font24: {
    fontSize: 24,
  },
  font14: {
    fontSize: 14,
  },
  font13: {
    fontSize: 13,
  },
  font16: {
    fontSize: 14,
  },
  font11: {
    fontSize: 11,
  },
  bgGray: {
    backgroundColor: "#DCE1E5",
  },
  textGray: {
    color: "#595959",
  },
  textEnd: {
    textAlign: "right",
  },
  bgPink: {
    backgroundColor: "#DC8977",
    borderRadius: 70,
    paddingStart: 15,
    paddingTop: 2,
    paddingBottom: 3,
  },
  notification: {
    overflow: 'hidden',
    padding: 14,
    borderRadius: 8,
  },
});
