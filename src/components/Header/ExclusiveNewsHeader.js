import React from "react";
import {
  View,
  Switch,
  Image,
  StyleSheet,
} from "react-native";
import { useColorScheme } from "nativewind";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


export default function ExclusiveNewsHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();


  return (
    <>
    <View className="w-full flex-row justify-between items-center px-4 pt-10 pb-4 bg-white pb-4 bg-white">
    <View className="bg-gray-100 p-2 rounded-full items-center justify-center">
    <View style={styles.container}>
      {/* Header logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/pahadi-khabar-nama-logo2-2.png")}
          style={styles.logo}
        />
      </View>
    </View>
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: hp(1),
    position: "relative",
    paddingTop: hp(1),
    paddingBottom: hp(1),
    paddingLeft: hp(2.5),
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  
  logoContainer: {
    flex: 1, // Take remaining space
    alignItems: "center", // Center content horizontally
  },
  logo: {
    width: hp(25),
    height: hp(6),
  },
});
