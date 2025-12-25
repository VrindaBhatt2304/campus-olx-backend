import jwt from "jsonwebtoken";
export function verifyJWT(req,res,next){
    try{
        const token=req.headers.authorization.split(" ")[1];

    const user=jwt.verify(token, process.env.JWT_KEY);
    req.user=user.user;
    next();
    }
    catch(e)
    {
        res.status(401).json({msg:"Token Error!!"});
    }
}