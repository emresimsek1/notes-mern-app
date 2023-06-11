import mongoose from "mongoose";
import User from "../models/user.js";

export const createAccount = async (req, res) => {
  const { username: username } = req.body;
  const login = await User.find({ username: username });
  if (login.length < 1) {
    const test = await User.find().sort({ userId: -1 }).limit(1);
    let post = req.body;
    post = { ...post, userId: test[0].userId + 1 };
    const newUser = new User(post);
    try {
      newUser.save();
      res.status(201).json({status:200,newUser});
    } catch (error) {
      res.status(409).json({ message: "hata aldıq" });
    }
  } else {
    res.status(409).json();
  }
};

export const updatePassword = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send({ message: "no post with that id" });
  const updatePost = await User.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatePost);
};
