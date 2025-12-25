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

const PORT=process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("The port is running!");
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("Connection established!");
    })
    .catch((e)=>{
        console.error(e);
    })
})

export default app;