import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>

      <Button title="Go to Meals!" onPress={() => {
        // props.navigation.replace('CategoryMeals');
        // props.navigation.navigate('CategoryMeals');
        props.navigation.navigate({ routeName: 'CategoryMeals' });
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoriesScreen;