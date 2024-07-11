import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Share,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { ChevronLeftIcon, ShareIcon } from "react-native-heroicons/outline";
import { BookmarkSquareIcon } from "react-native-heroicons/solid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../components/Loading";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

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

      // Check if the article is already in the bookmarked list
      const isArticleBookmarked = savedArticlesArray.some(
        (savedArticle) => savedArticle.id === item.id
      );

      if (!isArticleBookmarked) {
        // If the article is not bookmarked, add it to the bookmarked list
        savedArticlesArray.push(item);
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(savedArticlesArray)
        );
        toggleBookmark(true);
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
      } catch (error) {
        console.log("Error Loading Saved Articles", error);
      }
    };

    loadSavedArticles();
  }, [item.id]);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={hp("3%")} strokeWidth={3} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={onShare}>
            <ShareIcon size={hp("3%")} color="gray" strokeWidth={2} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={toggleBookmarkAndSave}
          >
            <BookmarkSquareIcon
              size={hp("3%")}
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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp("2%"),
    paddingTop: hp("3%"),
    paddingBottom: hp("2%"),
    backgroundColor: "white",
  },
  iconContainer: {
    backgroundColor: "#f0f0f0",
    padding: hp("1%"),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    backgroundColor: "#f0f0f0",
    padding: hp("1%"),
    borderRadius: 999,
    marginLeft: hp("1.5%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
