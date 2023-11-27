import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { colorTheme } from "../utils/colorTheme";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colorTheme.grayscaleTitleActive }]}>
        Hello
      </Text>
      <Text style={[styles.text, { color: colorTheme.PrimaryDefault }]}>
        Again!
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 48,
    fontWeight: "bold",
  },
});
