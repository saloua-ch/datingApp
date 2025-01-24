import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import ListProfiles from "./ListProfiles";

export default function AllProfilesMain() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>All Profiles Ready to Start!</Text>
      <ListProfiles />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});
