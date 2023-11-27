import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import CheckBox from "@react-native-community/checkbox";

const RemeberMe = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View>
      {/* <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      /> */}
      <Text>Remeber Me</Text>
    </View>
  );
};

export default RemeberMe;

const styles = StyleSheet.create({});
