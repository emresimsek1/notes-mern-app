import * as api from "../api/users";
import { UserAction } from "../constants";
import { setInfo } from "./appAction";
import { AppInfoType } from "../constants";
export const updatePass = (id, user) => {
  return async (dispatch) => {
    try {
      await api.updatePassword(id, user);
      dispatch(setInfo(AppInfoType.SUCCESS, "The password changed"));
      
    } catch (error) {
      console.log(error.message);
      dispatch(setInfo(AppInfoType.ERROR, "The password could not be changed"));
      dispatch({
        type: UserAction.NEW_PASSWORD_FAILED,
      });
    }
  };
};
