import {
  ImmerReducer,
  createReducerFunction,
  createActionCreators,
} from "immer-reducer";
import { Drink, Drinker } from "../types";

export interface State {
  drinker: Drinker | null;
  drinks: Drink[] | null;
}

export const initialState: State = {
  drinker: null,
  drinks: null,
};

export class Reducer extends ImmerReducer<State> {
  clearState() {
    this.draftState = initialState;
  }

  setDrinker(drinker: Drinker) {
    this.draftState.drinker = drinker;
  }

  setDrinkersDrink(drinks: Drink[]) {
    this.draftState.drinks = drinks;
  }

  getDrinkersDrink(drinkerId: string) {}

  getDrinker() {}
}

export const hydrateyReducer = createReducerFunction(Reducer, initialState);
export const hydrateyActions = createActionCreators(Reducer);
