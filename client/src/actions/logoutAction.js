import { UserAction } from "../constants";
import { PostAction } from "../constants";

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: UserAction.LOGOUT });
      dispatch({ type: PostAction.CLEAR });
     } catch (error) {
      console.log(error);
    }
  };
};
