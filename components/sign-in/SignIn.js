import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/log-in.png")} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.forgotPassword}>Forgot your Password?</Text>
      <Pressable
        style={styles.buttonLogin}
        onPress={() => navigation.navigate("DrawerNavigation", { email })}
      >
        <Text style={styles.textStyle}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  input: { width: "80%", padding: 10, backgroundColor: "#E6E6FA", marginBottom: 10, marginTop:30 },
  image: { width: 150, height: 150, marginBottom: 20 ,padding:100},
  forgotPassword: { alignSelf:"flex-end",fontSize: 12, color: "#888", marginBottom: 70 ,marginTop:30, marginRight:50},
  buttonLogin: { padding: 10, backgroundColor: "#e5d5da", borderRadius: 10 },
  textStyle: { fontWeight: "bold", textAlign: "center" },
});
