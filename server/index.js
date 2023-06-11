import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";
import * as dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); 
app.use("/posts", postRoutes);
app.use("/users", usersRoutes);
const CONNECTION_URL = process.env.REACT_APP_TEST;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`server runing ${PORT}`)))
  .catch((error) => console.log(error.message));
