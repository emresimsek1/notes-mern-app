import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = (userId) => {
  return axios.get(`${url}/${userId}`);
};
export const createPost = (newPost) => {
  return axios.post(url, newPost);
};
export const updatePost = (id, updatedPost) => {
  return axios.patch(`${url}/${id}`, updatedPost);
};
export const deletePost = (id) => {
  return axios.delete(`${url}/${id}`);
};
