import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import Loading from "../components/Loading";
import CategoriesCard from "../components/CategoriesCard";
import TrendingNews from "../components/TrendingNews";
import Header from "../components/Header/Header";
import NewsSection from "../components/NewsSection/NewsSection";
import { useQuery } from "@tanstack/react-query";
import {
  fetchBreakingNews,
  fetchRecommendedNews,
  fetchAllCategories,
} from "../api/api";
import MiniHeader from "../components/Header/MiniHeader";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [categories, setCategories] = useState([]);
  const [breakingNews, setBreakingNews] = useState([]);
  const [recommendedNews, setRecommendedNews] = useState([]);
  const [activeCategory, setActiveCategory] = useState("होम");
  const [isFetchingRecommendedNews, setIsFetchingRecommendedNews] = useState(false);


  const savedArticles = AsyncStorage.getItem("savedArticles");
  console.log("Sved Article in HomeScreen >> ",savedArticles)
  const { isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchAllCategories,
    onSuccess: (category) => {
      setCategories(category.data);
      setActiveCategory(category.data[0].category);
    },
    onError: (error) => {
      console.log("Error fetching categories", error);
    },
  });

  const { isLoading: isTrendingLoading } = useQuery({
    queryKey: ["breakingNews"],
    queryFn: () => fetchBreakingNews(activeCategory),
    onSuccess: (breakingNews) => {
      setBreakingNews(breakingNews.data);
    },
    onError: (error) => {
      console.log("Error fetching breaking news", error);
    },
  });

  const { isLoading: isRecommendedLoading } = useQuery({
    queryKey: ["recommendedNews"],
    queryFn: () => fetchRecommendedNews(activeCategory),
    onSuccess: (recommendedNews) => {
      setRecommendedNews(recommendedNews.data);
    },
    onError: (error) => {
      console.log("Error fetching recommended news", error);
    },
  });

  const handleChangeCategory = async (category) => {
    setIsFetchingRecommendedNews(true);
    setActiveCategory(category);

    const breakingNewsResponse = await fetchBreakingNews(category);
    if(breakingNewsResponse.data){
      setBreakingNews(breakingNewsResponse.data);
    }else{
      setBreakingNews([]);
    }

    const recommendedNewsResponse = await fetchRecommendedNews(category)
    if(recommendedNewsResponse.data){
      console.log("Recommended >>",recommendedNewsResponse.data)
      setRecommendedNews(recommendedNewsResponse.data);
    }else{
      setRecommendedNews([]);
    }
    setIsFetchingRecommendedNews(false);
  };

  return (
    <SafeAreaView className=" flex-1 bg-white dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View>
        {/* <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={{ height: 150, width: 400, backgroundColor: "#e0e0e0" }}>
            <MiniHeader label="Ads will be here" />
          </View>
        </View> */}
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 120,
            position: "relative",
            zIndex: 999,
          }}
        >
          {/* Header */}
          <Header />

          {/* Trending News */}

          <View
            className="flex-row mx-4"
            style={{
              justifyContent: "center",
              alignItems: "center",
              zIndex: -999,
            }}
          >
            {isCategoriesLoading ? (
              <Loading />
            ) : (
              <CategoriesCard
                categories={categories}
                activeCategory={activeCategory}
                handleChangeCategory={handleChangeCategory}
              />
            )}
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: hp(25),
          }}
        >
          {isTrendingLoading || isFetchingRecommendedNews ? (
            <Loading />
          ) : (
            <View style={{ paddingTop: hp(2) }}>
              <TrendingNews label="Breaking News" data={breakingNews} />
            </View>
          )}

          {/* News */}
          <View>
            <MiniHeader label={activeCategory} />
            {isFetchingRecommendedNews || isRecommendedLoading ? (
              <Loading />
            ) : (
              <NewsSection
                label={activeCategory}
                categories={categories}
                newsMain={recommendedNews}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
