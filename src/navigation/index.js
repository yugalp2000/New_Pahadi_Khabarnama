import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import NewsDetails from "../screens/NewsDetails";
import SavedScreen from "../screens/SavedScreen";
import CustomLiveIcon from "./CustomLiveIcon";
import LiveNews from '../screens/LiveNews';
import ExclusiveNewsSections from "../screens/ExclusiveNewsDetails";
import PhotoNews from "../screens/PhotoNews";
import VideoNews from "../screens/VideoNews";
import WebSeriesNews from "../screens/WebSeriesNews";
import SplashScreens from "../screens/SplashScreens";
import SettingScreen from "../screens/SettingScreen";
import ContactScreen from "../screens/ContactScreen";
import TermsConditionScreen from "../screens/TermsConditionScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import AboutusScreen from "../screens/AboutusScreen";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import CustomDrawerContent from "../screens/CustomDrawerContent"; // Import your custom drawer content

const android = Platform.OS === "android";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconComponent;

            if (route.name === "होम") {
              iconComponent = <Ionicons name="home" size={size} color={color} />;
            } else if (route.name === "वीडियो") {
              iconComponent = <Ionicons name="videocam" size={size} color={color} />;
            } else if (route.name === "सेव्ड न्यूज़") {
              iconComponent = <Ionicons name="save" size={size} color={color} />;
            } else if (route.name === "फ़ोटो") {
              iconComponent = <Ionicons name="camera" size={size} color={color} />;
            } else if (route.name === "लाइव") {
              iconComponent = <CustomLiveIcon size={size} color={color} />;
            } else if (route.name === "वेब स्टोरी") {
              iconComponent = <Ionicons name="globe" size={size} color={color} />;
            }
            return iconComponent;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: hp(1.5),
            fontFamily: "SpaceGroteskMedium",
          },
          tabBarStyle: {
            backgroundColor: colorScheme == "dark" ? "black" : "white",
            borderTopWidth: 0,
            padding: 10,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="होम" component={HomeScreen} />
        <Tab.Screen name="वीडियो" component={VideoNews} />
        <Tab.Screen name="सेव्ड न्यूज़" component={SavedScreen} />
        <Tab.Screen name="लाइव" component={LiveNews} />
        <Tab.Screen name="फ़ोटो" component={PhotoNews} />
        <Tab.Screen name="वेब स्टोरी" component={WebSeriesNews} />
      </Tab.Navigator>
    );
  };

  const MainStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="SplashS">
        <Stack.Screen
          name="SplashS"
          component={SplashScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{ animation: "slide_from_bottom", headerShown: false }}
        />
        <Stack.Screen
          name="ExclusiveNewsDetails"
          component={ExclusiveNewsSections}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={TabNavigator}
          options={{
            headerShown: false,
            headerLeft: null, // Hides the drawer icon
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermConditions"
          component={TermsConditionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutusScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Menu" options={{
            headerShown: false,
            headerLeft: null, // Hides the drawer icon
          }} component={MainStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
