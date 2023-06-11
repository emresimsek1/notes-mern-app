import { UserAction } from "../constants";
import update from "immutability-helper";

const initialState = {
  username: String,
  password: String,
};
function signUpReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case UserAction.SIGN_UP:
      newState = update(state, { $set: action.payload });
      break;
      case UserAction.SIGN_UP_FAILED:
        newState = update(state, { $set: action.payload });
        break;
  
    default:
      newState = state;
  }
  return newState;
}
export default signUpReducer;
