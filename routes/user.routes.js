import express from "express";
import { get, register, login, getuser, update, addWishlist } from "../controllers/user.contollers.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const userRoute= express.Router();

userRoute.get("/",get);
userRoute.post("/register",register);
userRoute.post("/login",login);
userRoute.get("/getuser",verifyJWT,getuser);
userRoute.put("/updateuser",verifyJWT,update);
userRoute.put("/addwishlist",verifyJWT,addWishlist);
export default userRoute;