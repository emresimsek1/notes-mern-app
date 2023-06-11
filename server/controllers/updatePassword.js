import mongoose from "mongoose";
import Password from "../models/user.js";

export const updatePassword = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("no post with that id");
    const updatePost = await Password.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.json(updatePost);
  };
  