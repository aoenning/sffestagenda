import { all } from "redux-saga/effects";
import home from "./modules/home/sagas";

export default function* rootSaga() {
  return yield all([home]);
}
