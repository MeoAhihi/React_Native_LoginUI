import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Frame171 from "./components/Frame171";
import Username from "./components/Username";
import Password from "./components/Password";
import AdditionalOption from "./components/AdditionalOption";
import LoginButton from "./components/LoginButton";
import SocialLogin from "./components/SocialLogin";

export default function App() {
  return (
    <View style={styles.container}>
      <Frame171 />
      <Username />
      <Password />
      <AdditionalOption />
      <LoginButton />
      <SocialLogin />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 68,
    marginHorizontal: 24,
    paddingHorizontal: "24px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
