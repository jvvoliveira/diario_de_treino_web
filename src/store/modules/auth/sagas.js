import { all, takeLatest, call, put } from "redux-saga/effects";

import history from "../../../services/history";
import api from "../../../services/api";
import { signSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email, password
    });

    const { token, user } = response.data;

    if (!user.instructor) {
      alert("Usuário não é instrutor");
      return;
    }

    yield put(signSuccess(token, user));

    history.push('/home');
  } catch (error) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn)
]);