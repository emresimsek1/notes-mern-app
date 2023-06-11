import mongoose from "mongoose";

const signUpSchema = mongoose.Schema({
  username: String,
  password: String,
  userId: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var SignUp = mongoose.model("users", signUpSchema);

export default SignUp;
