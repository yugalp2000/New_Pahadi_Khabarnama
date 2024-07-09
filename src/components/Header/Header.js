import React, { useState } from "react";
import {
  View,
  Switch,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useColorScheme } from "nativewind";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Header() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Drawer Toggle Button */}
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="bars" size={30} color="#000000" />
      </TouchableOpacity>

      {/* Header logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/pahadi-khabar-nama-logo2-2.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: hp(1),
    paddingTop: hp(1),
    paddingBottom: hp(1),
    paddingLeft: hp(2.5),
  },
  drawerButton: {
    marginRight: hp(2),
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

