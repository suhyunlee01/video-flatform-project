import express from "express";
import {edit, deleteUser, logout, seeUser} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", deleteUser);
userRouter.get("/logout", logout);
userRouter.get(":id(\\d+)",seeUser);

export default userRouter;