import {
  View,
  Text,
  Image,
  ScrollView,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  ChevronLeftIcon,
  ClockIcon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";

import { BookmarkSquareIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useColorScheme } from "nativewind";
import ExclusiveNewsHeader from "../components/Header/ExclusiveNewsHeader";

const ExclusiveNewsSections = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isBookmarked, toggleBookmark] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const paragraphs = item.content.split("\n");
  const halfIndex = Math.ceil(paragraphs.length / 2);
  const firstHalf = paragraphs.slice(0, halfIndex).join("\n");
  const secondHalf = paragraphs.slice(halfIndex).join("\n");

  // Function to format the date
  function formatDate(isoDate) {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, options);
  }

  const toggleBookmarkAndSave = async () => {
    try {
      // Check if News Article is already in Storage
      const savedArticles = await AsyncStorage.getItem("savedArticles");
      let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      console.log("Check if the article is already bookmarked >> ", savedArticles);

      // Check if the article is already in the bookmarked list
      const isArticleBookmarked = savedArticlesArray.some((savedArticle) => savedArticle.id === item.id);

      console.log("Check if the article is already in the bookmarked list", isArticleBookmarked);

      if (!isArticleBookmarked) {
        // If the article is not bookmarked, add it to the bookmarked list
        savedArticlesArray.push(item);
        await AsyncStorage.setItem("savedArticles", JSON.stringify(savedArticlesArray));
        toggleBookmark(true);
        console.log("Article is bookmarked");
      } else {
        // If the article is already bookmarked, remove it from the list
        const updatedSavedArticlesArray = savedArticlesArray.filter((savedArticle) => savedArticle.id !== item.id);
        await AsyncStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticlesArray));
        toggleBookmark(false);
        console.log("Article is removed from bookmarks");
      }
    } catch (error) {
      console.log("Error Saving Article", error);
    }
  };

  useEffect(() => {
    // Load saved articles from AsyncStorage when the component mounts
    const loadSavedArticles = async () => {
      try {
        const savedArticles = await AsyncStorage.getItem("savedArticles");
        const savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];

        // Check if the article is already in the bookmarked list
        const isArticleBookmarked = savedArticlesArray.some((savedArticle) => savedArticle.id === item.id);

        toggleBookmark(isArticleBookmarked);
        console.log(
          "Check if the current article is in bookmarks");
      } catch (error) {
        console.log("Error Loading Saved Articles", error);
      }
    };

    loadSavedArticles();
  }, [item.id]);

  // Styles with conditional colors
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: colorScheme === "dark" ? "#252a2e" : "#ffffff",
    },
    heading: {
      fontSize: hp(3.5), // Converted to 'px' in React Native
      color: colorScheme === "dark" ? "#ffffff" : "#252a2e",
      fontWeight: "bold", // Added font weight to match the specified styling
      marginBottom: 16,
      textAlign: "justify",
    },
    image: {
      width: "100%",
      height: 200,
      marginBottom: 16,
      borderRadius: 8,
    },
    description: {
      fontSize: hp(2.5),
      color: colorScheme === "dark" ? "#dddddd" : "#000000",
      marginBottom: 16,
      textAlign: "justify",
    },
    categoriesContainer: {
      flexDirection: "row",
      marginBottom: 16,
    },
    category: {
      marginRight: 8,
      backgroundColor: "#f0f0f0",
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 4,
    },
    date: {
      fontSize: hp(1.8),
      color: colorScheme === "dark" ? "#aaaaaa" : "#666",
    },
    author: {
      fontSize: hp(1.8),
      color: "red",
    },
    videoContainer: {
      marginTop: 16,
      aspectRatio: 16 / 9,
      borderRadius: 8,
      overflow: "hidden",
      width: "100%",
      height: 200,
      marginBottom: 16,
      borderRadius: 8,
    },
    video: {
      flex: 1,
    },
  });

  return (
    <>
      <View className="w-full flex-row justify-between items-center px-4 pt-10 pb-4 bg-white pb-4 bg-white">
        <View className="bg-gray-100 p-2 rounded-full items-center justify-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={25} strokeWidth={3} color="gray" />
          </TouchableOpacity>
        </View>
        <View className="space-x-3 rounded-full items-center justify-center flex-row">
          <TouchableOpacity
            className="bg-gray-100 p-2 rounded-full"
            onPress={toggleBookmarkAndSave}
          >
            <BookmarkSquareIcon
              size={25}
              color={isBookmarked ? "green" : "gray"}
              strokeWidth={2}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: "#ffffff", height: hp(6) }}>
        <Image
          source={require("../../assets/pahadi-khabar-nama-logo2-2.png")}
          style={{ width: hp(25), height: hp(6), marginLeft: hp(10), marginTop: hp(1) }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>[Exclusive] {item.heading}</Text>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: hp(1.5),
        }}
        >
          <ClockIcon size={16} color="gray" />
          <Text style={styles.date}>
            {" "}
            {formatDate(item.publishedAt)} &nbsp;&nbsp;By<Text style={styles.author}> न्यूज़ डेस्क उत्तराखंड टुडे</Text>
          </Text>
        </View>
        <Image
          source={{
            uri:
              item.imageUrl ||
              "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image} />
        <Text style={styles.description}>{firstHalf}</Text>

        {item.videoUrl && (
          <View style={styles.videoContainer}>
            <Video
              source={{
                uri:
                  item.videoUrl ||
                  "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={styles.video}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
            />
          </View>
        )}
        <Text style={styles.description}>{secondHalf}</Text>
      </ScrollView>
    </>
  );
};

export default ExclusiveNewsSections;
