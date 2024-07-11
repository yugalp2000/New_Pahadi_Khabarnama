import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
