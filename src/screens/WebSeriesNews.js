import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import MiniHeader from "../components/Header/MiniHeader";
import Header from "../components/Header/Header";
import { fetchWebStories } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const windowWidth = Dimensions.get("window").width;

export default function WebSeriesNews() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [webStories, setWebStories] = useState([]);
  const navigation = useNavigation();

  const { isLoading: isWebStoriesLoading } = useQuery({
    queryKey: ["web stories"],
    queryFn: fetchWebStories,
    onSuccess: (data) => {
      setWebStories(data.data);
    },
    onError: (error) => {
      console.log("Error fetching breaking news", error);
    },
  });

  const openArticle = (item) => {
    item.posturl
      ? navigation.navigate("NewsDetails", item)
      : navigation.navigate("ExclusiveNewsDetails", item);
    // Open the link in a web browser or navigate to it within your app
  };

  const renderArticleItem = ({ item }) => (
    <View
      style={{
        width: windowWidth,
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 40,
      }}
    >
      <Image
        source={{
          uri:
            item.imageUrl ||
            "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={{ width: "100%", height: 300, marginBottom: 10 }}
      />
      <Text
        style={{
          fontSize: hp(1.5),
          fontWeight: "bold",
          textAlign: "center",
          color: colorScheme == "dark" ? "white" : "black",
        }}
      >
        {item.heading}
      </Text>
      <Text
        style={{
          marginBottom: 10,
          textAlign: "center",
          color: colorScheme == "dark" ? "white" : "black",
        }}
      >
        {item.content.length > 30
          ? item.content.slice(0, 28) + "..."
          : item.content.split("-")[0] || "N/A"}
      </Text>
      <Button
        title="Read Full Article"
        onPress={() => {
          openArticle(item);
        }}
      />
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorScheme == "dark" ? "black" : "white",
      }}
    >
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View style={{ zIndex: 999 }}>
        <Header />
      </View>
      <View>
        <MiniHeader label="वेब स्टोरी" />
        {isWebStoriesLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={webStories}
            renderItem={renderArticleItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
