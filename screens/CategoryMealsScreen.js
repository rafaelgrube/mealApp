import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = (props) => {

  const navigation = props.navigation;
  const categoryId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Meal Detail!" onPress={() => {
        navigation.navigate({ routeName: 'MealDetail' })
      }} />

      <Button title="Go Back" onPress={() => {
        navigation.goBack();
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
