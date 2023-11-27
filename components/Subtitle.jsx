import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorTheme } from "../utils/colorTheme";
const Subtitle = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome back you’ve{"\n"}been missed</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  text: {
    color: colorTheme.grayscaleBodyText,
    fontSize: 20,
  },
});
