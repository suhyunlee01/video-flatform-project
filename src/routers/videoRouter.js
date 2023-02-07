import express from "express";
import {getEdit, postEdit, deleteVideo, seeVideo, getUpload, postUpload} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)", seeVideo);
videoRouter.get("/:id(\\d+)/remove", deleteVideo);

export default videoRouter;

