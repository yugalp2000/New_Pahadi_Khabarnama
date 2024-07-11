import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import { BookmarkSquareIcon } from "react-native-heroicons/solid";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function NewsSection({ newsMain, label, loadMoreData }) {
  const navigation = useNavigation();
  const [idList, setIdList] = useState([]);
  const [bookmarkStatus, setBookmarkStatus] = useState([]);

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

  // Hook to set the URL list
  useEffect(() => {
    const urls = newsMain.map((item) => item.id);
    setIdList(urls);
  }, [newsMain]);

  // Function to handle click on an item
  const handleClick = (item) => {
    console.log("Item Handle Click >> ", item)
    item.posturl ? navigation.navigate("NewsDetails", item) : navigation.navigate("ExclusiveNewsDetails", item)
  };

  // Function to toggle bookmark and save article
  const toggleBookmarkAndSave = async (item, index) => {
    try {
      const savedArticles = await AsyncStorage.getItem("savedArticles");
      let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];

      // Check if the article is already in the bookmarked list
      const isArticleBookmarked = savedArticlesArray.some((savedArticle) => savedArticle.id === item.id);
      console.log("Article is bookmarked :: ", isArticleBookmarked, savedArticlesArray, savedArticles);

      if (!isArticleBookmarked) {
        // If the article is not bookmarked, add it to the bookmarked list
        savedArticlesArray.push(item);
        await AsyncStorage.setItem("savedArticles", JSON.stringify(savedArticlesArray));
        const updatedStatus = [...bookmarkStatus];
        updatedStatus[index] = true;
        setBookmarkStatus(updatedStatus);
        console.log("Article is bookmarked :: ", savedArticlesArray);
      } else {
        // If the article is already bookmarked, remove it from the list
        const updatedSavedArticlesArray = savedArticlesArray.filter((savedArticle) => savedArticle.id !== item.id);
        await AsyncStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticlesArray));
        const updatedStatus = [...bookmarkStatus];
        updatedStatus[index] = false;
        setBookmarkStatus(updatedStatus);
        console.log("Article is removed from bookmarks ", updatedSavedArticlesArray);
      }
    } catch (error) {
      console.log("Error Saving/Removing Article", error);
    }
  };

  // Effect to load saved articles from AsyncStorage when the component mounts
  useFocusEffect(
    useCallback(() => {
      const loadSavedArticles = async () => {
        try {
          const savedArticles = await AsyncStorage.getItem("savedArticles");
          const savedArticlesArray = savedArticles
            ? JSON.parse(savedArticles)
            : [];

          // Check if each URL in 'idList' exists in the bookmarked list
          const isArticleBookmarkedList = idList.map((id) => savedArticlesArray.some((savedArticle) => savedArticle.id === id));

          // Set the bookmark status for all items based on the loaded data
          setBookmarkStatus(isArticleBookmarkedList);
          console.log("Check if the current article is in bookmarks");
        } catch (error) {
          console.log("Error Loading Saved Articles", error);
        }
      };

      loadSavedArticles();
    }, [navigation, idList]) // Include 'navigation' in the dependencies array if needed
  );

  // Component to render each item in the list
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.touchableOpacity} key={index} onPress={() => handleClick(item)}>
        <View style={styles.itemContainer}>
          {/* Image */}
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri:
                  item.imageUrl ||
                  "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Content */}
          <View style={styles.contentContainer}>
            {/* Title */}
            <Text
              style={[styles.title, { fontSize: hp(1.7) }]}
            >
              {item.heading.length > 50
                ? item.heading.slice(0, 50) + "..."
                : item.heading}
            </Text>

            {/* Date */}
            <Text style={styles.date}>
              {formatDate(item.publishedAt)}
            </Text>
          </View>

          {/* Save */}
          <View style={styles.bookmarkContainer}>
            <TouchableOpacity
              onPress={() => toggleBookmarkAndSave(item, index)}
            >
              <BookmarkSquareIcon
                color={bookmarkStatus[index] ? "green" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Your header content */}
      </View>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={newsMain}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: hp(10),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16, // px-4 equivalent
    paddingBottom: 16, // pb-4 equivalent
    backgroundColor: 'white',
  },
  touchableOpacity: {
    marginBottom: 4,
    marginHorizontal: 4,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  imageContainer: {
    width: '20%',
  },
  image: {
    width: hp(9),
    height: hp(10),
    borderRadius: 8,
  },
  contentContainer: {
    width: '70%',
    paddingLeft: 16,
    justifyContent: 'center',
  },
  title: {
    color: '#333',
    fontFamily: 'SpaceGroteskBold',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  bookmarkContainer: {
    width: '10%',
    justifyContent: 'center',
  },
});
