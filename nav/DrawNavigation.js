import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "./TabNavigation";
import CustomDrawerContent from "./CustomDrawerContent"; // Import the new file

const Drawer = createDrawerNavigator();

export default function DrawNavigation({ route }) {
  const email = route.params?.email || "Guest";

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} route={route} />}>
      <Drawer.Screen name="Home" component={TabNavigation} />
    </Drawer.Navigator>
  );
}
