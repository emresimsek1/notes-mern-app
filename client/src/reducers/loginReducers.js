import { UserAction } from "../constants";
import update from "immutability-helper";

const initialState = {
  _id: Number,
  username: String,
  password: String,
  userId: Number,
  loginFailed: false,
  login: false,
};
function loginUserReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case UserAction.LOGIN:
      newState = update(state, {
        username: { $set: action.payload.username },
        password: { $set: action.payload.password },
        userId: { $set: action.payload.userId },
        loginFailed: { $set: false },
        login: { $set: true },
        _id: { $set: action.payload._id },
      });
      break;
    case UserAction.LOGIN_FAILED:
      newState = update(state, { loginFailed: { $set: true } });
      break;
    case UserAction.LOGOUT:
      newState = update(state, { $set: initialState });
      break;

    default:
      newState = state;
  }
  return newState;
}
export default loginUserReducer;
