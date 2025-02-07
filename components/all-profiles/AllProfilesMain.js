import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import ListProfiles from "./ListProfiles";
import { useTheme } from "../../ThemeContext"; // Import Theme Context

export default function AllProfilesMain() {
  const { isDark } = useTheme(); // Get the current theme state

  // Select background image based on theme
  const backgroundImage = isDark
    ? require("D:/DatingApp/assets/bg1.jpg")  // Dark mode background
    : require("D:/DatingApp/assets/bg.jpg");  // Light mode background

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Header />
        <Text style={[styles.title, { color: isDark ? "green" : "red" }]}>
          All Profiles Ready to Start!
        </Text>
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
