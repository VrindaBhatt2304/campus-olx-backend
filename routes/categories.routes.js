import express from 'express';
import { get, getone, post } from '../controllers/categories.controllers.js';
import { verifyJWT } from '../middleware/verifyJWT.js';


const router=express.Router();

router.get("/get",get)
router.get("/get/:idx",getone);
router.post("/post",verifyJWT,post);

export default router;