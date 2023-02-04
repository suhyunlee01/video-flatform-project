import express from "express";
import {edit, deleteVideo, upload, seeVideo} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", seeVideo);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", deleteVideo);

export default videoRouter;

