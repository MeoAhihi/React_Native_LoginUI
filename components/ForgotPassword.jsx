import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ForgotPassword = () => {
  return (
    <View>
      <Text style={styles.text}>Forgot the Pasword?</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  text: {
    color: "#5890FF",
  },
});
