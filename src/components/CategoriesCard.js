import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function CategoriesCard({
  categories,
  activeCategory,
  handleChangeCategory,
}) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-2" >
        {categories.map((category, index) => {
          let isActive = category.category == activeCategory;
          let activeButtonClass = isActive
            ? "bg-gray-400"
            : "bg-black dark:bg-neutral-400";
          let activeTextClass = isActive
            ? "text-black "
            : "text-gray-400 dark:text-neutral-600 ";

          return (
            <TouchableOpacity key={index} onPress={() => handleChangeCategory(category.category)} className="flex items-center space-y-1">
              <View className={ "rounded-full py-2 px-2"}>
                <Text className={"capitalize " + activeTextClass} style={{
                    fontSize: hp(2), fontWeight: 700}} >
                  {category.category}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
