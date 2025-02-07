import React, { useState, createContext, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawNavigation from "./nav/DrawNavigation";
import SignIn from "./components/sign-in/SignIn";

const Stack = createNativeStackNavigator();

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DrawerNavigation" component={DrawNavigation} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
