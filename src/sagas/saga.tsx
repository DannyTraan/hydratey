import { call, all, put, takeLeading } from "redux-saga/effects";
import axios from "axios";
import { hydrateyActions } from "../reducers/hydratey";
import { BASE_URL, TOKEN } from "../constants";
import { Drink, Drinker } from "../types";
import { getDrinkers } from "../api/drinkers/getDrinkers";

export function* hydrateySaga() {
  yield all([
    takeLeading(hydrateyActions.getDrinker.type, getDrinker),
    takeLeading(hydrateyActions.getDrinkersDrink.type, getDrinkersDrink),
  ]);
}

export function* clearState() {
  yield put(hydrateyActions.clearState());
}

export function* getDrinkersDrink(data: { payload: string }) {
  try {
    const url = `${BASE_URL}/drinkers/${data.payload}/drinks`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    };
    console.log("drinkerid", data.payload);

    const result: Drink[] = yield call(axios.get, url, options);
    console.log(result.data);
    if (result.status.toString().startsWith("2")) {
      yield put(hydrateyActions.setDrinkersDrink(result.data));
    }
  } catch (e) {
    //
  }
}

export function* getDrinker() {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    };
    const result: Drinker = yield call(
      axios.get,
      `${BASE_URL}/drinkers`,
      options
    );
    const drinkers = result.data;
    const drinker = drinkers.find((x: Drinker) => x.id === "zygi");

    if (drinker) {
      yield put(hydrateyActions.setDrinker(drinker));
    } else console.log("Drinker not found");
  } catch (error) {
    // silent error
  }
}
