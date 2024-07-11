import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function PageHeader() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={hp(3.4)} strokeWidth={hp(0.4)} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/pahadi-khabar-nama-logo2-2.png")}
          style={styles.logo}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp(2),
    paddingTop: hp(5),
    paddingBottom: hp(4),
    backgroundColor: "white",
  },
  backButtonContainer: {
    backgroundColor: "#f5f5f5",
    padding: hp(1),
    borderRadius: hp(5),
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#ffffff",
    height: hp(6),
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: hp(25),
    height: hp(6),
  },
});
