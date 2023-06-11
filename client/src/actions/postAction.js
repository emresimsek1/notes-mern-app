import * as api from "../api/posts";
import { PostAction } from "../constants";
import { setInfo } from "./appAction";
import { AppInfoType } from "../constants";

export const getPosts = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: PostAction.FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      dispatch({ type: PostAction.CREATE, payload: data });
      dispatch(setInfo(AppInfoType.SUCCESS, "The note has been saved"));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updatePost = (id, post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);

      dispatch({ type: PostAction.UPDATE, payload: data });
      dispatch(setInfo(AppInfoType.SUCCESS, "The note has been updated"));
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.deletePost(id);

      dispatch({ type: PostAction.DELETE, payload: id });
      dispatch(setInfo(AppInfoType.SUCCESS, "The note has been deleted"));
    } catch (error) {
      console.log(error.message);
    }
  };
};
