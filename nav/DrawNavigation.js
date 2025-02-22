import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Switch, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigation from "./TabNavigation";
import CustomDrawerContent from "./CustomDrawerContent";
import { useTheme } from "../ThemeContext"; // Import updated theme

const Drawer = createDrawerNavigator();

export default function DrawNavigation({ route }) {
  const { isDark, toggleTheme } = useTheme(); // Get theme state & function

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} route={route} />}
      screenOptions={{
        headerRight: () => (
          <View style={styles.switchContainer}>
            <Ionicons name={isDark ? "moon" : "sunny"} size={24} color={isDark ? "#FFD700" : "#000"} />
            <Switch value={isDark} onValueChange={toggleTheme} />
          </View>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigation} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
});
