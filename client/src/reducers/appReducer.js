import { AppAction } from "../constants";
import update from "immutability-helper";

const initialState = {
  info: {
    type: "",
    message: "",
  },
};

function appReducer(state = initialState, action) {
  let newState = state;

  switch (action.type) {
    case AppAction.SET_INFO: {
      newState = update(state, { info: { $set: action.payload } });
      break;
    }
    case AppAction.CLEAR_INFO: {
      newState = update(state, { info: { $set: initialState.info } });
      break;
    }
    default: {
      break;
    }
  }

  return newState;
}
export default appReducer;
