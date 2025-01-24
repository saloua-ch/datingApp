import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";

export default function Form() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    birthday: "",
    country: "",
    city: "",
    job: "",
    email: "",
  });

  const handleInputChange = (key, value) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {Object.keys(userInfo).map((key) => (
          <TextInput
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={userInfo[key]}
            onChangeText={(text) => handleInputChange(key, text)}
            mode="outlined"
            style={styles.input}
          />
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
});
