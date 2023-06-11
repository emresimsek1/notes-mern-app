import * as api from "../api/users";
import { UserAction } from "../constants";
import { getPosts } from "./postAction";
export const loginUser = (username, password) => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchUsers(username, password);
      if (data.status === 200) {
        dispatch(getPosts(data.posts));
        dispatch({ type: UserAction.LOGIN, payload: data.user });
      }
    } catch (error) {
      dispatch({ type: UserAction.LOGIN_FAILED });
    }
  };
};
