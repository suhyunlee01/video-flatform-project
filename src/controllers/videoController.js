import Video from "../models/Video"; //Video라는 모델을 import 해줌으로써 video.find() , video.deletOne() 등등등을 실행시킬 수 있게 되었다.

export const home = async(req, res) => {
        const videos = await Video.find({});
        return res.render("home", { pageTitle: "Home", videos});
};

export const search =(req, res) => res.send("Search Video");

export const getEdit = (req, res) => {
    const id = req.params.id;
    return res.render("edit",{pageTitle: `Edit`});
};
export const postEdit = (req, res) =>{
    const id = req.params.id;
    const title = req.body.title; //form의 name을 가져오는 것임!
    return res.redirect(`/videos/${id}`);
};
export const deleteVideo =(req, res) => res.send("remove Video");
export const upload =(req, res) => res.send("upload Video");
export const seeVideo = (req, res) =>{
    const id = req.params.id;
    return res.render("watch", { pageTitle: `Watch`});
};

export const getUpload = (req, res) =>{
    res.render("upload",{pageTitle: "Upload"})
};
export const postUpload = (req, res) =>{
    const title = req.body.upload;
    res.redirect("/")
};