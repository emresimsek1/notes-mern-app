import mongoose from "mongoose";
import Login from "../models/user.js";
import PostMessage from "../models/postMessage.js";

export const getUsers = async (req, res) => {
  try {
    const login = await Login.find();
    res.status(200).json(login);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
 
export const loginUser = async (req, res) => {
  const { username: username, password: password } = req.body;
  const login = await Login.find({ username: username });
  try {
    if (login.length > 0) {
      if (login[0].password === password) {
        const postMessage = await PostMessage.find({
          userId: parseInt(login[0].userId),
        });

        return res
          .status(200)
          .json({ status: 200, user: login[0], posts: postMessage });
      } else {
        return res.status(404).json({ message: "Wrong Password" });
      }
    } else {
      return res.status(404).json({ message: "Wrong Password and Username" });
    }
  } catch {}
};
