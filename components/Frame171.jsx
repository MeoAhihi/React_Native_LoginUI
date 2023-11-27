import { View, StyleSheet } from "react-native";
import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";

export default function Frame171() {
  return (
    <View style={styles.view}>
      <Title />
      <Subtitle />
    </View>
  );
}

const styles = StyleSheet.create({
  view: { height: 240, width: "100%" },
});
