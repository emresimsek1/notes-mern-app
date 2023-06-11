import axios from "axios";

const url = "http://localhost:5000/users";

export const fetchUsers = (username, password) => {
  return axios.post(url+"/login", {username,password});
};
export const createUser = (newPost) => {
  return axios.post(url, newPost);
};
export const updatePassword = (id, updatedPassword) => {
  return axios.patch(`${url}/${id}`, updatedPassword);
};
