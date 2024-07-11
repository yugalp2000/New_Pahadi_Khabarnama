import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
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
        contentContainerStyle={styles.scrollView}
      >
        {categories.map((category, index) => {
          let isActive = category.category === activeCategory;
          let activeButtonStyle = isActive ? styles.activeButton : styles.inactiveButton;
          let activeTextStyle = isActive ? styles.activeText : styles.inactiveText;

          return (
            <TouchableOpacity 
              key={index} 
              onPress={() => handleChangeCategory(category.category)} 
              style={styles.touchableOpacity}
            >
              <View style={[styles.button, activeButtonStyle]}>
                <Text style={[styles.text, activeTextStyle]}>
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

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: hp(1),
  },
  touchableOpacity: {
    alignItems: 'center',
    marginHorizontal: hp(1),
  },
  button: {
    borderRadius: hp(5), // Adjusted to create a rounded full button
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(2),
  },
  activeButton: {
    backgroundColor: 'gray',
  },
  inactiveButton: {
    backgroundColor: 'black',
  },
  text: {
    fontSize: hp(2),
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  activeText: {
    color: 'black',
  },
  inactiveText: {
    color: 'white',
  },
});
