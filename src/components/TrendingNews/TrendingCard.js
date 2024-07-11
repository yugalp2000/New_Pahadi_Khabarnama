import {
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

var { width, height } = Dimensions.get("window");

export default function TrendingCard({ item, handleClick }) {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              item.imageUrl ||
              "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <View style={styles.contentContainer}>
          {/* <View style={styles.subHeadingContainer}>
            {item.heading.includes("-") && (
              <Text style={styles.subHeadingText}>
                {item.heading.split("-")[1].trim().slice(0, 18)}
              </Text>
            )}
          </View> */}

          <View style={styles.textContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>
                {item.heading.length > 60
                  ? item.heading.slice(0, 58) + "..."
                  : item.heading.split("-")[0] || "N/A"}
              </Text>
            </View>

            <View>
              <Text style={styles.newsSourceText}>
              न्यूज़ डेस्क उत्तराखंड टुडे
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: width * 0.8,
    height: height * 0.22,
    borderRadius: 24,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  contentContainer: {
    position: 'absolute',
    bottom: 6,
    left: 4,
    justifyContent: 'flex-end',
    height: '80%',
  },
  textContainer: {
    marginTop: 1,
  },
  headingContainer: {
    maxWidth: '98%',
  },
  headingText: {
    color: 'white',
    fontSize: 16, // base font size equivalent
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  newsSourceText: {
    color: '#d1d5db', // neutral-300 equivalent
    fontSize: 14, // text-sm equivalent
    fontWeight: '500',
  },
});
