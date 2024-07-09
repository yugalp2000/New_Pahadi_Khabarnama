import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Carousal from "react-native-snap-carousel";
import TrendingCard from "./TrendingCard";

var { width } = Dimensions.get("window");

export default function TrendingNews({ data, label }) {
  const navigation = useNavigation();

  const handleClick = (item) => {

    item.posturl ? navigation.navigate("NewsDetails", item) : navigation.navigate("ExclusiveNewsDetails", item)
  };

  // console.log("Trending Movies", data);
  // console.log("label", label);

  return (
    <View>
      {/* Carousal */}
      <Carousal
        data={data}
        renderItem={({ item }) => (
          <TrendingCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.8}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}
