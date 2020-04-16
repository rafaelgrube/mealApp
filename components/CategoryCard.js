import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";

const CategoryCard = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp onPress={props.onSelect} style={{ flex: 1 }}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.titleItem} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
  },
  titleItem: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryCard;
