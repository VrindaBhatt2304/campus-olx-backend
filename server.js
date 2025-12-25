import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import category_router from "./routes/categories.routes.js"
import userRoute from "./routes/user.routes.js";
import productRouter from "./routes/products.routes.js";
import cors from "cors";
import { connectDB } from "./config/db.js";

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/category",category_router);
app.use("/user",userRoute);
app.use("/product",productRouter);
const PORT=process.env.PORT || 5000

const startServer = async () => {
    try {
        await connectDB();
        console.log("The database is connected. Yes it is.");
        app.listen(PORT, () => {
            console.log("Server is running at ", PORT);
        })
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}

startServer();

export default app;