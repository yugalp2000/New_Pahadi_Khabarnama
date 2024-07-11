import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Loading from "../components/Loading";
import { categories } from "../constants";
import MiniHeader from "../components/Header/MiniHeader";
import Header from "../components/Header/Header";
import NewsSection from "../components/NewsSection/NewsSection";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LiveNews() {
  const [recommendedNews, setRecommendedNews] = useState([]);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const loadMoreData = async () => {
    // Fetch more data and append it to the existing newsMain array
    const moreData = await fetchMoreNewsData(); // Implement this function to fetch more data
    setRecommendedNews((prevData) => [...prevData, ...moreData]);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View>
          <MiniHeader label="लाइव" />
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <NewsSection
              label="Recommendation"
              categories={categories}
              newsMain={recommendedNews}
              loadMoreData={loadMoreData}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    zIndex: 999,
  },
  scrollViewContent: {
    paddingBottom: hp(80),
  },
});
