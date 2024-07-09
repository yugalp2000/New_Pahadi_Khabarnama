import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function PageHeader() {
  const navigation = useNavigation();

  return (
    <>
      <View className="w-full flex-row justify-between items-center px-4 pt-10 pb-4 bg-white pb-4 bg-white">
        <View className="bg-gray-100 p-2 rounded-full items-center justify-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={25} strokeWidth={3} color="gray" />
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
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: "white",
  },
  backButtonContainer: {
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 50,
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
  contentContainer: {
    padding: 16,
  },
  description: {
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 16,
    marginTop: 16,
    textAlign: "justify",
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
  emailLink: {
    color: "blue",
  },
  link: {
    color: "blue",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
    // textDecorationLine: 'underline',
  },
});
