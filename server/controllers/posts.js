import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const postMessage = await PostMessage.find({ userId: parseInt(userId) });

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with that id");
  const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with that id");
  const deletePost = await PostMessage.findByIdAndRemove(id);
  res.json(deletePost);
};
