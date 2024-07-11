import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useColorScheme } from "nativewind";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function ExclusiveNewsHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.iconWrapper}>
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
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(2), // px-4 equivalent
    paddingTop: hp(5), // pt-10 equivalent
    paddingBottom: hp(2), // pb-4 equivalent
    backgroundColor: 'white',
  },
  iconWrapper: {
    backgroundColor: '#f0f0f0', // bg-gray-100 equivalent
    padding: hp(1), // p-2 equivalent
    borderRadius: hp(20), // rounded-full equivalent, using a large value for full rounding
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: hp(1),
    position: "relative",
    paddingTop: hp(1),
    paddingBottom: hp(1),
    paddingLeft: hp(2.5),
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
