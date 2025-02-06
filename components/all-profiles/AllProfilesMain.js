  import React from "react";
import { StyleSheet, View, Text ,ImageBackground } from "react-native";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import ListProfiles from "./ListProfiles";
import { useColorScheme} from "react-native";

export default function AllProfilesMain() {
  const colorScheme = useColorScheme();

  return (
    <ImageBackground
      source={require("D:/DatingApp/assets/bg.jpg")}
      style={styles.background}
    >
    <View style={styles.container}>
      <Header />
      <Text style={[
        styles.title,
        colorScheme === "light" ? { color: "red" } : { color: "green" },
        ]}
  >All Profiles Ready to Start!</Text>
      <ListProfiles />
      <Footer />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    
  },
});
