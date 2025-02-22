import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawNavigation from "./nav/DrawNavigation";
import SignIn from "./components/sign-in/SignIn";
import { ThemeProvider, useTheme } from "./ThemeContext"; // Import updated theme

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

function AppNavigator() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DrawerNavigation" component={DrawNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
