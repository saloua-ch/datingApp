import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListProfiles from "../components/all-profiles/ListProfiles";
import Top10Lists from "../top-10/Top10Lists";
import Form from "../components/user-information/Form";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "All Profiles") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Top 10") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="All Profiles" component={ListProfiles} />
      <Tab.Screen name="Top 10" component={Top10Lists} />
      <Tab.Screen name="Settings" component={Form} />
    </Tab.Navigator>
  );
}
