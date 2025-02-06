import Top10Lists from "./top-10/Top10Lists";
import Form from "./components/user-information/Form";
import AllCharacteristics from "./components/characteristics/AllCharacteristics";
import { StyleSheet, View, ImageBackground, useColorScheme } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import AllProfilesMain from "./components/all-profiles/AllProfilesMain";

const Stack = createNativeStackNavigator();

const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: { ...DefaultTheme.colors, background: "white", text: "black" },
};

const CustomDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: { ...DarkTheme.colors, background: "black", text: "white" },
};

export default function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme === "dark" ? CustomDarkTheme : LightTheme);

  // Debugging: Log the detected theme
  useEffect(() => {
    console.log("Detected theme:", colorScheme);
    setTheme(colorScheme === "dark" ? CustomDarkTheme : LightTheme);
  }, [colorScheme]); // Ensure re-render when the system theme changes

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Profiles">
          {(props) => (
            <ImageBackground
              source={require("./assets/bg.jpg")} // Ensure this path is correct
              style={styles.backgroundImage}
            >
              <AllProfilesMain {...props} />
            </ImageBackground>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
