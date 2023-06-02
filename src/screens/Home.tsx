import React, { useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import moment from "moment";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { hydrateyActions } from "../reducers/hydratey";
import * as selectors from "../selectors/hydratey";
import { Drink } from "../types";
import { COLORS } from "../styles";

type Props = {
  id: string;
  name: string;
};

export const HomeScreen: React.FC<Props> = () => {
  const drinker = useSelector((state) => selectors.getDrinker(state));
  const drinks = useSelector((state) => selectors.getDrinkersDrink(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrateyActions.getDrinker());
    dispatch(hydrateyActions.getDrinkersDrink("zygi"));
  }, []);
  if (!drinker || !drinks) {
    return null;
  }
  console.log("drink", drinks);
  const teamId = drinks[0];

  const formatDate = (date: string) => {
    const formattedTime = moment(date).format("HH:mm");
    return formattedTime;
  };
  // TODO: Wrap content in a scrollview or flatscreen
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.secondaryHeader}>
            {drinker.name} // {teamId.teamId}
          </Text>
          <Text style={styles.primaryHeader}>My Intake</Text>
        </View>
        <View></View>
        <View>
          <SegmentedControl
            style={{ marginVertical: "5%" }}
            values={["Today", "Overall"]}
            selectedIndex={0}
          />
        </View>
        <LinearGradient
          colors={[COLORS.pink, COLORS.blue, COLORS.purple]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: COLORS.dark,
            }}
          >
            Placeholder for showing total ML
          </Text>
        </LinearGradient>
        <View>
          {drinks.map((drink: Drink) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.subText} key={drink.id}>
                {drink.amount} ml{" "}
              </Text>
              <Text style={styles.dateText}>{formatDate(drink.createdAt)}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.dark,
  },
  primaryHeader: {
    fontSize: 40,
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "justify",
  },
  secondaryHeader: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    marginHorizontal: "5%",
  },
  subText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
  dateText: {
    textAlign: "right",
    fontSize: 20,
    color: COLORS.white,
  },
  linearGradient: {
    marginVertical: 10,
    borderRadius: 20,
    padding: 30,
  },
});

export default HomeScreen;
