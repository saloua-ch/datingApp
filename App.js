import { StyleSheet, View } from "react-native";
import Top10Lists from "./top-10/Top10Lists";
import AllProfilesMain from "./components/all-profiles/AllProfilesMain";
import Form from "./components/user-information/Form";
import AllCharacteristics from "./components/characteristics/AllCharacteristics";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();

const LightTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "white", text: "black" },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: "black", text: "white" },
};

export default function App() {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  return (
    <NavigationContainer
      theme={colorScheme === "light" ? LightTheme : CustomDarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Profiles">
          {() => <AllProfilesMain toggleTheme={() => setIsDark(!isDark)} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});