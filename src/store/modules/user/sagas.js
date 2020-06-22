import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {

  try {
    const { name, email, avatar_id, ...rest } = payload.data;
    console.log(payload);
    let profile = { name, email, avatar_id };
    if(rest.oldPassword){
      profile = {...profile, ...rest}
    }
    console.log(profile);
    const response = yield call(api.put, "users", profile);
    console.log(response.data);
    toast.success("Perfil atualizado com sucesso!");

    yield put(updateProfileSuccess(response.data))
  } catch (error) {
    toast.error("Erro ao atualizar perfil, confira seus dados");
    yield put(updateProfileFailure())
  }

}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);