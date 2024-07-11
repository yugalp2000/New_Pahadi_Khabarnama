import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BookmarkSquareIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header/Header";

export default function SavedScreen() {
  const navigation = useNavigation();
  const [savedArticles, setSavedArticles] = useState([]);
  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const [idList, setIdList] = useState([]);

  // Function to handle click on an item
  const handleClick = (item) => {
    item.posturl ? navigation.navigate("NewsDetails", item) : navigation.navigate("ExclusiveNewsDetails", item);
  };

  useEffect(() => {
    const id = savedArticles.map((item) => item.id);
    setIdList(id);
  }, [savedArticles]);

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

  const toggleBookmarkAndSave = async (item, index) => {
    try {
      const savedArticles = await AsyncStorage.getItem("savedArticles");
      let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];

      // Check if the article is already in the bookmarked list
      const isArticleBookmarked = savedArticlesArray.some(
        (savedArticle) => savedArticle.id === item.id
      );

      if (!isArticleBookmarked) {
        // If the article is not bookmarked, add it to the bookmarked list
        savedArticlesArray.push(item);
        await AsyncStorage.setItem("savedArticles", JSON.stringify(savedArticlesArray));
        const updatedStatus = [...bookmarkStatus];
        updatedStatus[index] = true;
        setBookmarkStatus(updatedStatus);
        console.log("Article is bookmarked", savedArticlesArray);
      } else {
        // If the article is already bookmarked, remove it from the list
        const updatedSavedArticlesArray = savedArticlesArray.filter(
          (savedArticle) => savedArticle.id !== item.id
        );
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(updatedSavedArticlesArray)
        );
        const updatedStatus = [...bookmarkStatus];
        updatedStatus[index] = false;
        setBookmarkStatus(updatedStatus);
        console.log("Article is removed from bookmarks");
      }
    } catch (error) {
      console.log("Error Saving/Removing Article", error);
    }
  };

  // Load saved articles from AsyncStorage when the screen gains focus
  useFocusEffect(
    useCallback(() => {
      const loadSavedArticles = async () => {
        try {
          const savedArticles = await AsyncStorage.getItem("savedArticles");
          const savedArticlesArray = savedArticles
            ? JSON.parse(savedArticles)
            : [];

          setSavedArticles(savedArticlesArray);
        } catch (error) {
          console.log("Error loading saved articles", error);
        }
      };

      loadSavedArticles();
    }, [navigation, idList])
  );

  const clearSavedArticles = async () => {
    try {
      await AsyncStorage.removeItem("savedArticles");
      setSavedArticles([]);
      console.log("Clear all saved articles");
    } catch (error) {
      console.log("Error clearing saved articles", error);
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        key={index}
        onPress={() => handleClick(item)}
      >
        <View style={styles.contentContainer}>
          {/* Image */}
          <Image
            source={{
              uri:
                item.imageUrl ||
                "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={styles.image}
            resizeMode="cover"
          />

          {/* Text Content */}
          <View style={styles.textContainer}>
            {/* Author */}
            <Text style={styles.author}>
              न्यूज़ डेस्क उत्तराखंड टुडे
            </Text>

            {/* Title */}
            <Text style={styles.title}>
              {item.heading.length > 50
                ? item.heading.slice(0, 50) + "..."
                : item.heading}
            </Text>

            {/* Date */}
            <Text style={styles.date}>
              {formatDate(item.publishedAt)}
            </Text>
          </View>

          {/* Bookmark */}
          <TouchableOpacity
            style={styles.bookmarkContainer}
            onPress={() => toggleBookmarkAndSave(item, index)}
          >
            <BookmarkSquareIcon color="green" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.mainContainer}>
        <StatusBar style={"dark"} />

        {/* Header */}
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>
            सेव्ड न्यूज़
          </Text>
          <TouchableOpacity
            onPress={clearSavedArticles}
            style={styles.clearButton}
          >
            <Text style={styles.clearButtonText}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>

        {/* Saved Articles List */}
        <FlatList
          data={savedArticles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    zIndex: 999,
  },
  mainContainer: {
    flex: 1,
    padding: hp(2),
    backgroundColor: 'white',
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  headerText: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: 'black', // Adjust color as needed
    fontFamily: 'SpaceGroteskBold',
  },
  clearButton: {
    backgroundColor: '#b30000', // Adjust color as needed
    paddingHorizontal: hp(2),
    paddingVertical: hp(1),
    borderRadius: hp(1),
  },
  clearButtonText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'SpaceGroteskBold',
  },
  itemContainer: {
    marginBottom: hp(2),
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  image: {
    width: hp(9),
    height: hp(10),
    borderRadius: hp(1),
  },
  textContainer: {
    width: '70%',
    paddingLeft: hp(2),
  },
  author: {
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: '#333', // Adjust color as needed
  },
  title: {
    fontSize: hp(1.7),
    color: '#333', // Adjust color as needed
    fontFamily: 'SpaceGroteskBold',
  },
  date: {
    fontSize: hp(1.5),
    color: '#666', // Adjust color as needed
  },
  bookmarkContainer: {
    width: '10%',
    justifyContent: 'center',
  },
  flatListContent: {
    paddingBottom: hp(2),
  },
});
