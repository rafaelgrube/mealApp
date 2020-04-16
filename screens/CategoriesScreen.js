import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryCard from "../components/CategoryCard";

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return <CategoryCard
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id,
          },
        });
      }
    } />;
  };

  return (
    /** FlatList with numColums make a grid */
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;