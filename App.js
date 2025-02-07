import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider, useTheme } from "./ThemeContext"; 
import AllProfilesMain from "./components/all-profiles/AllProfilesMain";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Profiles" 
          component={AllProfilesMain}
          options={{ headerRight: () => <ThemeToggle /> }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { Switch, View, Text } from "react-native";
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
      <Text style={{ color: isDark ? "white" : "black", marginRight: 5 }}>Dark Mode</Text>
      <Switch value={isDark} onValueChange={toggleTheme} />
    </View>
  );
}
