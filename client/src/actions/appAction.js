import { AppAction } from "../constants"
export function setInfo(type, message) {
  return {
    type: AppAction.SET_INFO,
    payload: {
      type,
      message,
    },
  }
}

export function clearInfo() {
  return {
    type: AppAction.CLEAR_INFO,
  }
}
