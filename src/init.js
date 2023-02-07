import "./db"; //이 파일을 서버가 import 해주면, 이 파일을 통해 서버는 바로 mongo로 연결될 수 있다.
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () => console.log(`Server Listenting on port http://localhost:${PORT}✨`);
app.listen(PORT, handleListening);