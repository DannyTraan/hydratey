import { fork } from "redux-saga/effects";
import { hydrateySaga } from "./saga";

export function* saga() {
  yield fork(hydrateySaga);
}
