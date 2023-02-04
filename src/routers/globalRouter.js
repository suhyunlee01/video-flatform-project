import express from "express";
import {Recommended, search} from "../controllers/videoController";
import {join, login} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", Recommended);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;