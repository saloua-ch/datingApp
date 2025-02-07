import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigation from "./TabNavigation";
import {  StyleSheet,View, Pressable, Text } from "react-native";

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
    <Pressable style={styles.menuItem} onPress={() => navigation.navigate("SignIn")}>
      <Ionicons name="home" size={20} color="#D96F52" />
      <Text style={styles.menuText}>Home</Text>
    </Pressable>
    
    <Pressable style={styles.menuItem} onPress={() => navigation.navigate("SignIn")}>
      <Ionicons name="log-out-outline" size={20} color="#D96F52" />
      <Text style={styles.menuText}>Logout</Text>
    </Pressable>
  </View> 
  );
}

export default function DrawNavigation({ route }) {
  const email = route.params?.email || "Guest";

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={`Welcome, ${email}`} component={TabNavigation} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  menuItem: {
    
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  menuText: {
    color: "#D96F52",
  
    fontSize: 16,
    marginLeft: 10, 
  },
});
