export const UserAction = {
  SIGN_UP: "User/SING_UP",
  SIGN_UP_FAILED: "User/SIGN_UP_FAILED",
  LOGIN: "User/LOGIN_USER",
  LOGIN_FAILED: "User/LOGIN_FAILED",
  NEW_PASSWORD: "User/NEW_PASSWORD",
  NEW_PASSWORD_FAILED: "User/NEW_PASSWORD_FAILED",
  LOGOUT: "User/LOGOUT",
};

export const PostAction = {
  CREATE: "Post/CREATE",
  UPDATE: "Post/UPDATE",
  DELETE: "Post/DELETE",
  FETCH_ALL: "Post/FETCH_ALL",
  CLEAR: "Post/CLEAR",
};

export const AppAction = {
  SET_INFO: "App/SET_INFO",
  CLEAR_INFO: "App/CLEAR_INFO",
};

export const AppInfoType = {
  ERROR: "error",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
};
