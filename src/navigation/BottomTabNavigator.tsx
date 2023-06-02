import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import ScoreboardScreen from "../screens/Scoreboard";
import AddWaterScreen from "../screens/AddWater";
import BottomTab from "./BottomTab";
import { DRINKER } from "../constants";

const { Navigator, Screen } = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} tabBar={BottomTab}>
      <Screen
        name="Home"
        component={() => <HomeScreen id={DRINKER.id} name={DRINKER.name} />}
      />
      <Screen name="AddWater" component={AddWaterScreen} />
      <Screen name="Scoreboard" component={ScoreboardScreen} />
    </Navigator>
  );
};
export default BottomTabNavigator;
