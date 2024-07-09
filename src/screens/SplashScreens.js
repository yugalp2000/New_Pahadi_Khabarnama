import { View, Image, Appearance } from "react-native";
import React, { useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function SplashScreens() {
  const navigation = useNavigation();
  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();

      setTimeout(() => {
        navigation.navigate("HomeTabs"); // Navigate to HomeTab
      }, 3000);
    }
  }, [fontsLoaded, fontError, navigation]);

  useEffect(() => {
    // Force light mode
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme === 'dark') {
        Appearance.set({ colorScheme: 'light' });
      }
    });

    onLayoutRootView();

    return () => subscription.remove();
  }, [fontsLoaded, fontError, onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("../../assets/pahadi-khabar-nama-logo2.png")}
        style={{ width: hp(35), height: hp(35) }}
        resizeMode="contain"
      />
    </View>
  );
}
