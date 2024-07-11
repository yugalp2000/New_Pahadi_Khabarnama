import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function MiniHeader({ label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: hp(2), // Equivalent to px-4
    marginVertical: hp(2), // Equivalent to my-4
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: hp(2.5), // Equivalent to text-xl
    color: 'black',
    fontFamily: 'SpaceGroteskBold',
  },
});
