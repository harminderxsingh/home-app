import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import * as Location from 'expo-location';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import Header from "../header/_layout";

import SvgSetting from '@/assets/images/setting.svg';
import SvgArrow from '@/assets/images/rightArrw.svg';
import {
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import useDelayedNavigation from "@/components/useDelayedNavigation";
import DelayedLink from "@/components/DelayedLink";
import { LinearGradient } from 'expo-linear-gradient';
import { addDays, differenceInDays } from "date-fns";
import { router } from "expo-router";
import axios from "axios";


export default function RootLayout() {
  const delayedNavigate = useDelayedNavigation();
  const [weather, setWeather] = useState({ temp: SecureStore.getItem('temp'), loading: true });
  const [city, setCity] = useState(SecureStore.getItem('city'));
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  // const [address, setAddress] = useState('');

  const { height } = Dimensions.get('window');
  const SHORT_HEIGHT_THRESHOLD = 767;
  const isShortHeight = height <= SHORT_HEIGHT_THRESHOLD;

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setWeather({ ...weather, loading: false });
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        // const latitude = 31.5602595
        // const longitude = 75.5357396

        // Fetch city, state, and country from OpenCage Geocoding API
        axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
          params: {
            q: `${latitude},${longitude}`,
            key: '07b4360876f34273bca374997a6ed1e0',
          },
        }).then((addressResponse) => {
          const components = addressResponse.data.results[0]?.components || {};
          setCity(components.town || components.city || components.state_district || 'Unknown City');
          setState(components.state || 'Unknown State');
          setCountry(components.country_code || 'Unknown Country');
        })

        // Fetch weather data from Open-Meteo API
        const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
          params: {
            latitude: latitude,
            longitude: longitude,
            current_weather: true,
          },
        });

        const temperature = weatherResponse.data.current_weather.temperature;
        setWeather({
          temp: temperature,
          loading: false,
        });

      } catch (error) {
        console.error("Error fetching location, address, or weather data:", error);
        setWeather({ ...weather, loading: false });
      }
    };

    fetchLocationAndWeather();
  }, []);


  useEffect(() => {
    SecureStore.setItemAsync('city', city)
    SecureStore.setItemAsync('temp', `${weather.temp}`)
  }, [city, weather.temp])

  const openWeather = () => {
    // Format URL for The Weather Network
    const formattedCity = encodeURIComponent(city.toLowerCase().replace(/\s+/g, '-'));
    const formattedState = encodeURIComponent(state.toLowerCase().replace(/\s+/g, '-'));
    const formattedCountry = encodeURIComponent(country.toLowerCase().replace(/\s+/g, '-'));
    // Construct URL with dynamic city, state, and country
    const weatherUrl = `https://www.theweathernetwork.com/en/city/${formattedCountry}/${formattedState}/${formattedCity}/current`;
    Linking.openURL(weatherUrl).catch(err => console.error("Failed to open URL: ", err));
  };

  const openService = (service: string) => {
    router.push({
      pathname: 'contact',
      params: {
        service,
      },
    });
  }

  const getDaysUntilNextService = (lastServiceDate, interval = 30) => {
    if (!lastServiceDate) return 0;

    const currentDate = new Date();
    const nextServiceDate = addDays(new Date(lastServiceDate), interval);

    return Math.max(differenceInDays(nextServiceDate, currentDate), 0);
  };

  const solarPenalDaysLeft = getDaysUntilNextService(user?.solarPanelCleanedDate);
  const septicTankCleanDaysLeft = getDaysUntilNextService(user?.septicTankCleanedDate);

  return (
    <GradientBackgroundComponent>
      <GestureHandlerRootView style={{ flex: 1 }}>

        <Header />
        <View style={styles.outerGap}>
          <Text style={[styles.font24, styles.fontWight600, styles.hideCursor]} >
            Welcome home {user?.fullName}
          </Text>
          <Text style={[styles.font14, styles.fontWight600, styles.textWhite, { marginBottom: 10 }]}>
            Unit 22, Nara St. BillionBricks Tartac
          </Text>
          {/* <BlurView
            intensity={10} tint='light' blurReductionFactor={2}
            experimentalBlurMethod='dimezisBlurView'
            style={{ overflow: "hidden", borderRadius: 5 }}
          > */}

          <View>
            {/* <LinearGradient
                // Background Linear Gradient
                colors={['rgba(240, 240, 240, 0.4)', 'transparent']}
                style={styles.background1}

              /> */}
            <TouchableOpacity onPress={openWeather} style={[
              styles.notification,
              styles.upperGap14,
              { flexDirection: "row", alignItems: "center" },
            ]}>
              <View>
                <SvgSetting height={18} width={20} />
              </View>
              <Text style={[styles.font14, { color: "#595959" }]}>
                {" "}
                Today's Weather: {weather.temp}°C in {city}
              </Text>
            </TouchableOpacity>
          </View>

          {/* </BlurView> */}
          <View style={[styles.upperGap10]}>
            <View
              style={{ overflow: "hidden", borderRadius: 10 }}
            >
              <LinearGradient
                // Background Linear Gradient
                colors={['rgba(240, 240, 240, 0.4)', 'transparent']}
                style={styles.background}

              />
              <View style={styles.notification}>

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
                    style={[styles.font11, styles.textWhite, { color: 'rgba(255, 255, 255, 0.7)' }]}
                  >
                    TYPHOON CARINAL: Reaching Manila {" "}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#rgba(90, 123, 140, 1)",
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
                {
                  (!user?.solarPanelCleanedDate || !user?.septicTankCleanedDate) &&
                  <DelayedLink href="/notificationsetting" >
                    <View style={[styles.font13, styles.textGray, styles.upperGap14, styles.flex]}>

                      <View style={styles.rightGap}>
                        <View style={styles.blueDot}></View>
                      </View>
                      <Text style={styles.textGray} >
                        Set Solar and septic tank alerts {">"}
                      </Text>
                    </View>
                  </DelayedLink>
                }
                {
                  solarPenalDaysLeft <= 14 &&
                  <TouchableOpacity onPress={() => openService('solar')} >
                    <View style={[styles.font13, styles.textGray, styles.upperGap14, styles.flex, { paddingVertical: 10 }]}>
                      <View style={styles.rightGap}>
                        <View style={styles.blueDot}></View>

                      </View>
                      <Text style={styles.textGray} >
                        Solar panel maintenance {solarPenalDaysLeft > 0 ? `time in ${solarPenalDaysLeft} days` : 'is due now'}. {">"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                }
                {
                  septicTankCleanDaysLeft <= 14 &&
                  <TouchableOpacity onPress={() => openService('septic')} >
                    <View style={[styles.font13, styles.textGray, styles.upperGap14, styles.flex]}>

                      <View style={styles.rightGap}>
                        <View style={styles.blueDot}></View>

                      </View>
                      <Text style={styles.textGray} >
                        Septic tank maintenance {septicTankCleanDaysLeft > 0 ? `time in ${septicTankCleanDaysLeft} days` : 'is due now'}. {">"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                }
                <View>
                  <Text
                    style={[
                      styles.font14,
                      styles.textGray,
                      styles.upperGap14,
                      styles.textEnd,
                    ]}
                    onPress={() => { delayedNavigate('/updates') }}
                  >
                    More alerts...
                  </Text>
                </View>
              </View>

            </View>
          </View>
          <View style={styles.grid}>
            <View style={[styles.item, styles.upperGap10]}>
              <TouchableOpacity onPress={() => { delayedNavigate('/homedata') }}  >
                <View style={[styles.box, ...(isShortHeight ? [styles.boxSm] : [])]}>
                  <Text style={[
                    styles.textGray,
                    styles.font21,
                    styles.fontWight600,
                  ]}>
                    Home{'\n'}
                    Data
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { delayedNavigate('/updates') }}>
                <View style={[styles.box, styles.upperGap10, ...(isShortHeight ? [styles.boxSm] : [])]}>
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
                    0
                  </Text>
                  <Text
                    style={[
                      styles.textGray,
                      styles.font21,
                      styles.fontWight600,
                    ]}
                  >
                    BB {'\n'}
                    Updates
                  </Text>



                </View>
              </TouchableOpacity>

            </View>
            <View style={[styles.item, styles.upperGap10]}>
              <TouchableOpacity onPress={() => { delayedNavigate('/homedocument') }} >
                <View
                  style={[styles.box, ...(isShortHeight ? [styles.boxSm] : [])]}
                >
                  <Text
                    style={[
                      styles.textGray,
                      styles.font21,
                      styles.fontWight600,
                    ]}
                  >
                    Home{'\n'}
                    Documents
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { delayedNavigate('/chat') }}

              >
                <View

                  style={[
                    styles.box,
                    styles.upperGap10,
                    ...(isShortHeight ? [styles.boxSm] : [])
                  ]}
                >
                  <Text
                    style={[
                      styles.textGray,
                      styles.font21,
                      styles.fontWight600,
                    ]}
                  >
                    Home{'\n'}
                    Assistance
                  </Text>
                </View>
              </TouchableOpacity>

              {/* </BlurView> */}
            </View>
          </View>
        </View>
      </GestureHandlerRootView>
    </GradientBackgroundComponent>
  );
}
const styles = StyleSheet.create({
  blueDot: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(150, 200, 211, 1)',
  },
  flex: {
    // marginTop: 10,
    color: "#fff",
    flexDirection: 'row',
    alignItems: 'center'
  },
  background1: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 40,
    borderRadius: 8,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 100,
    borderRadius: 8,
  },
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
    position: 'absolute',
    top: 9,
    right: 9,
    textAlign: "right",
    backgroundColor: "#rgba(90, 123, 140, 1)",
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
    // overflow: 'hidden',
    backgroundColor: "#fff",
    paddingBottom: 12,
    paddingLeft: 9,
    borderRadius: 10,
    color: "#fff",

  },
  box3: {
    fontSize: 21,
    fontWeight: 600,
    height: 132,
    // overflow: 'hidden',
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "flex-end",
    paddingBottom: 12,
    paddingLeft: 9,
    borderRadius: 10,
    color: "#404040",
  },
  box: {
    fontSize: 21,
    fontWeight: 600,
    height: 132,
    overflow: 'hidden',
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "flex-end",
    paddingBottom: 12,
    paddingLeft: 9,
    borderRadius: 10,
    color: "#404040",
  },
  boxSm: {
    height: 80,
  },
  container: {
    backgroundColor: "transparent",
  },
  outerGap: {
    marginHorizontal: 20,
    marginBottom: 20,
    position: "absolute",
    bottom: 10,
  },
  upperGap10: {
    marginTop: 10,
  },
  upperGap14: {
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
    fontSize: 13,
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
    backgroundColor: "#rgba(68, 84, 107, 1)",
    borderRadius: 70,
    paddingStart: 15,
    paddingTop: 2,
    paddingBottom: 3,
    marginBottom: 12,
  },
  notification: {
    // overflow: 'hidden',
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 8,
  },
});
