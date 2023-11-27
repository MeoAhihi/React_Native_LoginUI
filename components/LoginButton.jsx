import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorTheme } from "../utils/colorTheme";

const LoginButton = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.buttton} title="Login" />
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 16,
  },
  buttton: {
    width: "100%",
    height: 50,
    backgroundColor: colorTheme.PrimaryDefault,
  },
});
