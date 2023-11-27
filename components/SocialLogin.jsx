import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SocialButton from "./SocialButton";

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.spacingTop}>or continue with</Text>
      <View style={[styles.socialButton, styles.spacingTop]}>
        <SocialButton
          iconURL={`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png`}
          socialName={"Facebook"}
        />
        <SocialButton
          iconURL={`https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png`}
          socialName={"Google"}
        />
      </View>
      <Text style={styles.spacingTop}>don't have an account ?</Text>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  socialButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  spacingTop: {
    marginTop: 16,
  },
});
