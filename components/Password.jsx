import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { colorTheme } from "../utils/colorTheme";

const Password = () => {
  return (
    <View style={styles.view}>
      <View style={styles.usernameView}>
        <Text style={styles.text}>Password</Text>
        <Text style={{ color: "red" }}>*</Text>
      </View>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  view: {
    width: "100%",
    marginTop: 16,
  },
  usernameView: {
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
  },
  input: {
    marginTop: 4,
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: colorTheme.grayscaleBodyText,
    borderRadius: 6,
  },
});
