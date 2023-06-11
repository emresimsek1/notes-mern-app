import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  note: String,
  userId: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
