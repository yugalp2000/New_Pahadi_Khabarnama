import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Linking,
  Image,
} from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import MiniHeader from "../components/Header/MiniHeader";
import Header from "../components/Header/Header";
import { fetchAllYoutubeVideos } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";


// {
//   id: 1,
//   imageUrl: "",
//   heading:
//     "Election 2024: पत्रकार आशुतोष नेगी उत्तराखंड क्रांति दल से गढ़वाल सीट के लिए लड़ेंगे चुनाव ...",
//   ytUrl: "https://youtu.be/gLDafh3-rIg?si=OWqg6tZwMkOnsJjf",
// },
// {
//   id: 2,
//   imageUrl: "",
//   heading:
//     "Election 2024: पत्रकार आशुतोष नेगी उत्तराखंड क्रांति दल से गढ़वाल सीट के लिए लड़ेंगे चुनाव ...",
//   ytUrl: "https://youtu.be/gLDafh3-rIg?si=OWqg6tZwMkOnsJjf",
// },
export default function VideoNews() {
  const [youtubeVideos, SetYoutubeVideos] = useState([]);
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { isLoading: isVideosLoading } = useQuery({
    queryKey: ["youtubeVideos"],
    queryFn: fetchAllYoutubeVideos,
    onSuccess: (data) => {
      SetYoutubeVideos(data.data);
    },
    onError: (error) => {
      console.log("Error fetching breaking news", error);
    },
  });

  const openYoutubeLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <SafeAreaView className=" flex-1 bg-white dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <View>
        <View style={{ zIndex: 999 }}>
          <Header />
        </View>
        <MiniHeader label="वीडियो" />
        {isVideosLoading ? (
          <Loading />
        ) : (
          <View
            style={{
              // width: windowWidth,
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <ScrollView contentContainerStyle={{ paddingBottom: hp(28) }}>
              {youtubeVideos.map((item, index) => (
                <View
                  key={index}
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri:
                        item.imageUrl ||
                        "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    }}
                    style={{
                      width: hp(10),
                      height: hp(10),
                      marginRight: hp(1),
                    }}
                  />
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      openYoutubeLink(item.ytUrl);
                    }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        color: "red",
                        paddingTop: hp(3),
                        flexWrap: "wrap",
                        width: hp(40)
                      }}
                    >
                      {item.heading}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
