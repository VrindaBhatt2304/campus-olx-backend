import express from "express";
import { get, create, getOne, getProductsByUser, deleteById, updateById } from "../controllers/products.controllers.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const productRouter= express.Router();
productRouter.get("/",get);
productRouter.post("/create",verifyJWT,create);
productRouter.get("/user",verifyJWT,getProductsByUser);
productRouter.get("/:getid",verifyJWT,getOne);
productRouter.delete("/:id",verifyJWT,deleteById);
productRouter.patch("/:id",verifyJWT,updateById);

export default productRouter;