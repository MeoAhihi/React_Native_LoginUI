import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RemeberMe from "./RemeberMe";
import ForgotPassword from "./ForgotPassword";

const AdditionalOption = () => {
  return (
    <View style={styles.container}>
      <RemeberMe />
      <ForgotPassword />
    </View>
  );
};

export default AdditionalOption;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
});
