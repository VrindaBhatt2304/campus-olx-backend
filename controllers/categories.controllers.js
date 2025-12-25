import Category from "../models/Category.js";

export async function get(req,res)
{
    try{
            const cat=await Category.find().sort({createdAt:-1});
            res.status(200).json(cat);
        }
        catch(e)
        {console.log(e);}
}

export async function getone(req,res)
{
    try{
            const {idx}=req.params;
            const cat=await Category.findById(idx);
            res.status(200).json(cat);
        }
        catch(e)
        {console.log(e);}
}

export async function post(req,res)
{
    try{
            const cat=req.body;
            const create= await Category.create(cat);
            res.json(create);
        }
        catch(e)
        {
            console.log(e);
        }
}