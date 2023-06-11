import * as api from "../api/users";
import { UserAction } from "../constants";
import { setInfo } from "./appAction";
import { AppInfoType } from "../constants";
export const createAccount = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createUser(post);
      if (data.status === 200) {
        dispatch({ type: UserAction.LOGIN, payload: data.newUser });
        dispatch(setInfo(AppInfoType.INFO, "Welcome to Howling Abbys"));
      }
    } catch (error) {
       
      dispatch({ type: UserAction.SIGN_UP_FAILED });
      dispatch(setInfo(AppInfoType.ERROR, "Something went wrong"));
    }
  };
};
