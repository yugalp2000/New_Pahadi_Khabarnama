import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Share,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import Loading from "../components/Loading";
import { ChevronLeftIcon, ShareIcon } from "react-native-heroicons/outline";
import { BookmarkSquareIcon } from "react-native-heroicons/solid";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("window");

export default function NewsDetails() {
  const { params: item } = useRoute();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const [isBookmarked, toggleBookmark] = useState(false);

  const toggleBookmarkAndSave = async () => {
    try {
      // Check if News Article is already in Storage
      const savedArticles = await AsyncStorage.getItem("savedArticles");
      let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      console.log("Check if the article is already bookmarked");

      // Check if the article is already in the bookmarked list
      const isArticleBookmarked = savedArticlesArray.some(
        (savedArticle) => savedArticle.id === item.id
      );

      console.log("Check if the article is already in the bookmarked list >> nd ",savedArticles);

      if (!isArticleBookmarked) {
        // If the article is not bookmarked, add it to the bookmarked list
        savedArticlesArray.push(item);
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(savedArticlesArray)
        );
        toggleBookmark(true);
        console.log("Article is bookmarked");
      } else {
        // If the article is already bookmarked, remove it from the list
        const updatedSavedArticlesArray = savedArticlesArray.filter(
          (savedArticle) => savedArticle.id !== item.id
        );
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(updatedSavedArticlesArray)
        );
        toggleBookmark(false);
        console.log("Article is removed from bookmarks");
      }
    } catch (error) {
      console.log("Error Saving Article", error);
    }
  };

  const onShare = async () => {
    try {
      
      const result = await Share.share({
        message: `Uttarakhand Today : ${item.heading}\n${item.posturl}\n\nVia @Uttarakhand Today`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    // Load saved articles from AsyncStorage when the component mounts
    const loadSavedArticles = async () => {
      try {
        const savedArticles = await AsyncStorage.getItem("savedArticles");
        const savedArticlesArray = savedArticles
          ? JSON.parse(savedArticles)
          : [];

        // Check if the article is already in the bookmarked list
        const isArticleBookmarked = savedArticlesArray.some(
          (savedArticle) => savedArticle.id === item.id
        );

        toggleBookmark(isArticleBookmarked);
        console.log("Check if the current article is in bookmarks >> nb 100 ",savedArticles); 
      } catch (error) {
        console.log("Error Loading Saved Articles", error);
      }
    };

    loadSavedArticles();
  }, [item.id]);

  return (
    <>
      <View className="w-full flex-row justify-between items-center px-4 pt-10 pb-4 bg-white px-4 pt-10 pb-4 bg-white">
        <View className="bg-gray-100 p-2 rounded-full items-center justify-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={25} strokeWidth={3} color="gray" />
          </TouchableOpacity>
        </View>

        <View className="space-x-3 rounded-full items-center justify-center flex-row">
          <TouchableOpacity
            className="bg-gray-100 p-2 rounded-full"
            onPress={onShare}
          >
            <ShareIcon size={25} color="gray" strokeWidth={2} />
          </TouchableOpacity>
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
      {/* WebView */}
      <WebView
        key={item.id} // Unique key based on the item.posturl
        source={{ uri: item.posturl }}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
      />

      {visible && (
        <ActivityIndicator
          size={"large"}
          color={"green"}
          style={{
            position: "absolute",
            top: height / 2,
            left: width / 2,
          }}
        />
      )}
    </>
  );
}
