import express from "express";
import { Logout,Login,register } from "../controllers/user.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);


export default router;