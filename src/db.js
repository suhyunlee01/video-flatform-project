import mongoose from "mongoose";
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/video-flatform-project"); //DB에 connect 되었다.

const db = mongoose.connection; //위의 connect 후 mongoose는 connection에 대한 엑세스를 준다.

const handleOpen = () => console.log("Connected To DB🙂");
const handleError = (error) =>  console.log("DB ERROR❌", error); // (error)아규먼트는 mongoose에게서 받아온다.

db.on("error", handleError); //on: 여러번 계속 발생시킬 수 있다. 클릭 등의 이벤트에서 사용할 수 있다. 
db.once("open", handleOpen); //once: 오로지 한 번만 발생한다. / 한 번 connection이 오픈 되면, handleOpen 콜백 함수를 실행한다.