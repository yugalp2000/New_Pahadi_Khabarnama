import { View, ScrollView } from "react-native";
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
  const [recommendedNews, SetRecommendedNews] = useState([]);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const loadMoreData = async () => {
    // Fetch more data and append it to the existing newsMain array
    const moreData = await fetchMoreNewsData(); // Implement this function to fetch more data
    SetRecommendedNews((prevData) => [...prevData, ...moreData]);
  };

  return (
    <SafeAreaView className=" flex-1 bg-white dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />

      <View>
        <View style={{ zIndex: 999 }}>
          <Header />
        </View>
        <View>
          <MiniHeader label="लाइव" />
          <ScrollView contentContainerStyle={{ paddingBottom: hp(80) }}>
            <NewsSection
              label="Recommendation"
              categories={categories}
              newsMain={recommendedNews}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
