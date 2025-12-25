import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import category_router from "./routes/categories.routes.js"
import userRoute from "./routes/user.routes.js";
import productRouter from "./routes/products.routes.js";
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/category",category_router);
app.use("/user",userRoute);
app.use("/product",productRouter);

app.listen(5000, ()=>{
    console.log("The port is running!");
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connection established!");
    })
    .catch((e)=>{
        console.log(e);
    })
})