import { PostAction } from "../constants";
import update from "immutability-helper";

const initialState = [];
function postsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case PostAction.CREATE:
      newState = update(state, { $push: [action.payload] });
      break;
    case PostAction.DELETE:
      state.map(
        (post, index) =>
          post._id === action.payload
            ? (newState = update(state, { $splice: [[index, 1]] }))
            : post
      );
      break;
    case PostAction.UPDATE:
      newState = state.map((post) =>
        post._id === action.payload._id
          ? update(state, { $merge: action.payload })
          : post
      );
      break;
    case PostAction.FETCH_ALL:
      newState = update(state, { $set: action.payload });
      break;
    case PostAction.CLEAR:
      newState = update(state, { $set: initialState });
      break;
    default:
      newState = state;
  }
  return newState;
}
export default postsReducer;
