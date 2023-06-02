import { State } from "../reducers/hydratey";

export const area = (state: any): State => state.hydratey;

export const getDrinker = (state: any) => area(state).drinker;

export const getDrinkersDrink = (state: any) => area(state).drinks;
