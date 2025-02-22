import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CustomDrawerContent(props) {
  const { navigation } = props;
  const email = props.route?.params?.email || "Guest"; // Get the email passed from SignIn
  
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Avatar */}
      <View style={styles.header}>
        <Image source={require("../assets/avatar-placeholder.png")} style={styles.avatar} />
        <Text style={styles.welcomeText}>Welcome, {email}</Text>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      {/* Logout Button */}
      <Pressable style={styles.logoutButton} onPress={() => navigation.navigate("SignIn")}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 },
  header: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  welcomeText: { fontSize: 18, fontWeight: "bold", color: "#D96F52" },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#D96F52",
    borderRadius: 5,
    margin: 20,
  },
  logoutText: { color: "#fff", fontSize: 16, marginLeft: 10 },
});
