import Video from "../models/Video"; //Video라는 모델을 import 해줌으로써 video.find() , video.deletOne() 등등등을 실행시킬 수 있게 되었다.

export const home = async(req, res) => {
        const videos = await Video.find({}); //const postUpload에서 .save()로 db에 저장했던 비디오 데이터들을 -> .find()로 이제 찾아와서 홈 화면에 띄울 수 있게 되었다.
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
export const postUpload = async(req, res) =>{
    const {title, description, hashtags} = req.body;
    try{
        await Video.create({
            title,
            description,
            createdAt: Date.now(),
            hashtags: hashtags.split(",").map(word => `#${word}`), // split을 통해 ,로 문자열을 각각 분리하고 map을 통해 word를 인자로 가진 함수를 만들어 word앞에 #가 붙게 한다.
            meta: {
                views:0,
                rating:0,
            }
        })
        return res.redirect("/")
    }catch(error){
        res.render("upload",{pageTitle: "Upload", errorMessage:"all fields are required"}); //try의 코드가 에러가 날 경우에는 다시 upload 페이지로 가도록 구현함.
    }
};