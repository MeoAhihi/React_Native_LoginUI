import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colorTheme } from "../utils/colorTheme";

const SocialButton = ({ iconURL, socialName }) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Image source={iconURL} width={24} height={24} />
        <Text>{socialName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorTheme.grayscaleSecondaryButton,
    alignItems: "center",
  },
});
