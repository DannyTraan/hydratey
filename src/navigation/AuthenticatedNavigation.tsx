import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";

const { Navigator, Screen, Group } = createNativeStackNavigator();

const AuthenticatedNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group screenOptions={{ presentation: "card" }}>
        <Screen name={"BottomTab"} component={BottomTabNavigator} />
      </Group>
    </Navigator>
  );
};

export default AuthenticatedNavigation;
