import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import ScoreboardScreen from "../screens/Scoreboard";

const { Navigator, Screen } = createBottomTabNavigator();
const BottomTabNavigator = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={HomeScreen} />
			<Screen name="Scoreboard" component={ScoreboardScreen} />
		</Navigator>
	);
};
export default BottomTabNavigator;
