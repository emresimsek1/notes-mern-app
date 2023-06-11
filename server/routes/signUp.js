import express from "express";
import { updatePassword, createAccount } from "../controllers/signUp";

const router = express.Router();

router.post("/", createAccount);
router.patch("/:id", updatePassword);

export default router;
