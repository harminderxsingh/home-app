import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import Header from "../header/_layout";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GradientBackgroundComponent>
      <Header />
      <View style={styles.outerGap}>
        <Text style={{ color: '#fff' }}>Dashboard</Text>
        <Text style={[styles.font24, styles.fontWight600, styles.textWhite]}>Welcome home Anna</Text>
        <Text style={[styles.font14, styles.fontWight600, styles.textWhite]}>Uni t 22, Nara St. BillionBricks Tartac</Text>
        <View style={[styles.notification, styles.upperGap14, { flexDirection: 'row' }]}>
          <View>
            <Image
              source={require('@/assets/images/setting.svg')}
            />
          </View>
          <Text style={[styles.font14, styles.textGray]}> Today is 2BC with a high chance of rain</Text>
        </View>
        <View style={[styles.upperGap10]}>
          <View style={styles.notification}>
            <Text style={[styles.font16, styles.fontWight600, styles.textGray]}>Alert</Text>
            <View style={[styles.bgDarkGray, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
              <Text style={[styles.font11, styles.textWhite, { paddingStart: 8 }]}>TYPHOON CARINAL: Reaching Larsen in 7 hours </Text>
              <TouchableOpacity style={{ backgroundColor: "#C6C6C6", padding: 5, marginEnd: 3, borderRadius: 50, height: 20, width: 20, flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require('@/assets/images/rightArrw.svg')}
                />
              </TouchableOpacity>
            </View>
            <Text style={[styles.font13, styles.textGray, styles.upperGap14]}>
              <Image
                style={{ marginRight: 5 }}
                source={require('@/assets/images/greenDot.svg')}
              />
              Your solar panel are due for cleaning next week.</Text>
            <Text style={[styles.font13, styles.textGray, styles.upperGap14]}>
              <Image
                style={{ marginRight: 5 }}
                source={require('@/assets/images/greenDot.svg')}
              />
              Your monthly bill is due  in 5 days.</Text>
            <View  >
              <Text style={[styles.font14, styles.textGray, styles.upperGap14, styles.textEnd]}>More alerts...</Text>
            </View>
          </View>

        </View>
        <View style={styles.grid} >
          <View style={[styles.item, styles.upperGap10]}>
            <View style={[styles.box, { backgroundColor: "#D9D9D9" }]}>
              <Link href="/homedata" style={[styles.textGray, styles.font21, styles.fontWight600, { width: 60 }]}>
                Home Data
              </Link>
            </View>
            <View style={[styles.between, styles.upperGap10]}>
              <Link href='/updates' style={{height:"100%"}}>
                <View style={[styles.w100]}>
                  <View>
                    <Text style={[styles.font14, styles.upperEnd, styles.textWhite, styles.fontWight600, { paddingRight: 0, padding: 5, height: 25, width: 25 }]} >7</Text>
                  </View>
                </View>
                <Text style={[styles.font14, styles.box2, styles.textGray]}>
                  Billion
                  Bricks
                  Update
                </Text>
              </Link>
            </View>
            
          </View>
          <View style={[styles.item, styles.upperGap10]}>
            <View style={[styles.box, { backgroundColor: "#96C8D3" }]}>
              <Link href='/homedocument' style={[styles.textGray, styles.font21, styles.fontWight600, { width: 110 }]}>
                Home Documnets
              </Link>
            </View>
            <View style={[styles.box, styles.upperGap10, { backgroundColor: "#EEEEEE" }]}>
              <Text style={[styles.textGray, styles.font21, styles.fontWight600, { width: 110 }]}>
                Support and Service
              </Text>
            </View>
          </View>
        </View>
      </View>
    </GradientBackgroundComponent>
  );
}
const styles = StyleSheet.create({
  w100: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 9,
    paddingTop: 9,



  },
  upperEnd: {
    textAlign: 'right',
    paddingRight: 9,
    backgroundColor: "red",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
  },
  between: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "flex-start",
    fontSize: 21,
    fontWeight: 600,
    height: 132,
    backgroundColor: '#F4B081',
    width: '100%',
    paddingBottom: 12,
    paddingLeft: 9,
    borderRadius: 10,
    color: "#404040",
  },
  grid: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  item: {
    width: '48%'
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
  box2: {
    fontSize: 21,
    fontWeight: 600,
    height: 132,
    borderRadius: 10,

  },
  container: {
    backgroundColor: "transparent"
  },
  outerGap: {
    margin: 20,
    position: 'absolute',
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
    fontWeight: '600',
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
  bgDarkGray: {
    backgroundColor: "#828282",
    borderRadius: 70,
    paddingStart: 15,
    paddingTop: 2,
    paddingBottom: 3,
  },
  notification: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 8,
  }

});