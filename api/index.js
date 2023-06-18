import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import userRoutes from "./routes/user.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v3/app/",userRoutes);
app.get("/",(req,res)=>res.send("hello"));
app.get("*",(req,res)=>res.send("doesnt exist"))

app.listen(PORT, ()=> console.log('server created'));