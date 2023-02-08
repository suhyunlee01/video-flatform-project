import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({ //사용자가 개발자도구로 언제든 수정할 수 있는 html말고 js에서도 required나 maxLength등등을 지정함
    title: {type: String, required:true, trim:true, minLength:1, maxLength: 40},
    description: {type: String, required:true, trim:true, maxLength: 200},
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String, trim:true }], //hashtag는 여러개의 string이 각각 나올 예정이라 array로 담아냄
    meta: {
        views: {type: Number, default:0, required:true},
        rating: {type: Number, default:0, required:true}, //default가 있어서 짜피 required이긴 한데 혹시 모르니까 써봄
    }
})

const Video = mongoose.model("Video", videoSchema);

export default Video;
