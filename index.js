
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import adminRoutes from './Routes/admin.js'
import authRoutes from './Routes/auth.js'
import cookieParser from "cookie-parser";


const app = express();
dotenv.config()
 
const connect = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log("connected to db");
        })
}
 
app.use(cookieParser())
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Oringin,X-Requested-With,Content-Type,Accept",
        
    );
    next();  
})  

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);



app.listen(`dummy-three-vert.vercel.app/`,(req,res,next) => {
    try {connect()
    console.log("connected to server")}
    catch (err) {
        next(err);
    }
}) 
