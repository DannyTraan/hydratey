import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import Profile from "../assets/icons/Profile";
import Scoreboard from "../assets/icons/Scoreboard";
import { COLORS } from "../styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Plus from "../assets/icons/Plus";

const BottomTab = ({ state, navigation }: BottomTabBarProps): JSX.Element => {
  const navigateHome = () => navigation.navigate("Home");
  const navigateAddWater = () => navigation.navigate("AddWater");
  const navigateScoreboard = () => navigation.navigate("Scoreboard");
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={navigateHome}>
          <View style={styles.iconWrapper}>
            <Profile color={state.index === 0 ? COLORS.pink : COLORS.white} />
          </View>
          <Text style={styles.text}>My Intake</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.addButton}
          onPress={navigateAddWater}
          underlayColor={"transparent"}
        >
          <Plus />
        </TouchableHighlight>

        <TouchableOpacity style={styles.button} onPress={navigateScoreboard}>
          <View style={styles.iconWrapper}>
            <Scoreboard />
          </View>
          <Text
            style={[styles.text, state.index === 2 && styles.highlightedText]}
          >
            Scoreboard
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView />
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323235CC",
    height: 73,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    paddingHorizontal: 32,
    borderRadius: 56,
    marginBottom: 16,
  },
  iconWrapper: { justifyContent: "center", alignSelf: "center" },
  button: { flexDirection: "column", justifyContent: "center" },
  addButton: {
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 12,
  },
  highlightedText: {
    color: COLORS.pink,
    fontSize: 12,
  },
});
