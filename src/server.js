import express from "express";
import morgan from "morgan";

const PORT = 4000;
const logger = morgan("dev");

const app = express();

const Home = (req, res) => {
    return res.send("homepage");
};
const login = (req, res, next) => {
    return res.send("login form")
}
app.use(logger);
app.get("/", Home); 
app.get("/login", login);

const handleListening = () => console.log(`Server Listenting on port http://localhost:${PORT}✨`);
app.listen(PORT, handleListening);

