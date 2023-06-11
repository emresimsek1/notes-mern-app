import express from "express";
import { loginUser } from "../controllers/login.js";
import { updatePassword } from "../controllers/updatePassword.js";
import { createAccount } from "../controllers/signUp.js";

const router = express.Router();
router.post("/login", loginUser);
router.post("/", createAccount);
router.patch("/:id", updatePassword);

export default router;
 