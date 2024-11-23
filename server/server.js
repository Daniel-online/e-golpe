import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import { dbConnect } from "./DataBase/dbConnect.js";
import cors from "cors";
import routes from "./Routes/routes.js"

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("common"));
app.use(helmet());
app.use(express.json());
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.listen(port, ()=>{
    console.log("test");
    dbConnect();
})