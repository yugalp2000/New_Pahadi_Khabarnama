import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  ChevronLeftIcon,
  ClockIcon,
  BookmarkSquareIcon,
} from "react-native-heroicons/outline";
import { Video, ResizeMode } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ExclusiveNewsSections = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isBookmarked, toggleBookmark] = useState(false);

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

  // Toggle bookmark status and save to AsyncStorage
  const toggleBookmarkAndSave = async () => {
    try {
      const savedArticles = await AsyncStorage.getItem("savedArticles");
      let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];

      const isArticleBookmarked = savedArticlesArray.some(
        (savedArticle) => savedArticle.id === item.id
      );

      if (!isArticleBookmarked) {
        savedArticlesArray.push(item);
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(savedArticlesArray)
        );
        toggleBookmark(true);
        console.log("Article is bookmarked");
      } else {
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

  // Styles with conditional colors
  const styles = StyleSheet.create({
    header: {
      paddingTop: hp(5),
      padding: hp(0.5),
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: hp(2), // 20px equivalent
    },
    container: {
      padding: hp(2), // 20px equivalent
      backgroundColor: "#ffffff",
    },
    heading: {
      fontSize: hp(3.5), // 35px equivalent
      color: "#252a2e",
      fontWeight: "bold",
      marginBottom: hp(1.6), // 16px equivalent
      textAlign: "justify",
    },
    image: {
      width: "100%",
      height: hp(26), // 260px equivalent
      marginBottom: hp(1.6),
      borderRadius: 8,
    },
    description: {
      fontSize: hp(2.5), // 25px equivalent
      color: "#000000",
      marginBottom: hp(1.6),
      textAlign: "justify",
    },
    date: {
      fontSize: hp(1.8), // 18px equivalent
      color: "#666666",
    },
    author: {
      fontSize: hp(1.8), // 18px equivalent
      color: "red",
    },
    videoContainer: {
      marginTop: hp(1.6), // 16px equivalent
      aspectRatio: 16 / 9,
      borderRadius: 8,
      overflow: "hidden",
      marginBottom: hp(1.6),
    },
    video: {
      flex: 1,
    },
    iconContainer: {
      backgroundColor: "#f0f0f0",
      padding: hp(1), // 10px equivalent
      borderRadius: 999,
    },
  });

  return (
    <>
      <View style={styles.header}>
        {/* Back button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <ChevronLeftIcon size={25} strokeWidth={3} color="gray" />
        </TouchableOpacity>

        {/* Bookmark button */}
        <TouchableOpacity onPress={toggleBookmarkAndSave} style={styles.iconContainer}>
          <BookmarkSquareIcon
            size={25}
            color={isBookmarked ? "green" : "gray"}
            strokeWidth={2}
          />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "#ffffff", height: hp(6) }}>
        <Image
          source={require("../../assets/pahadi-khabar-nama-logo2-2.png")}
          style={{ width: hp(25), height: hp(6), marginLeft: hp(10), marginTop: hp(1) }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>[Exclusive] {item.heading}</Text>

        {/* Date and Author */}
        <View style={{ flexDirection: "row", alignItems: "center", paddingBottom: hp(1.5) }}>
          <ClockIcon size={16} color="gray" />
          <Text style={styles.date}>
            {" "}
            {formatDate(item.publishedAt)} &nbsp;&nbsp;By<Text style={styles.author}> न्यूज़ डेस्क उत्तराखंड टुडे</Text>
          </Text>
        </View>

        {/* Image */}
        <Image
          source={{
            uri:
              item.imageUrl ||
              "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image}
        />

        {/* First half of description */}
        <Text style={styles.description}>{item.content}</Text>

        {/* Video */}
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

        {/* Second half of description */}
        <Text style={styles.description}>{item.content}</Text>
      </ScrollView>
    </>
  );
};

export default ExclusiveNewsSections;
