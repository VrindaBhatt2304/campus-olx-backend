import Product from "../models/Product.js";

export async function get(req, res) {
  try {
    const Products = await Product.find().populate(["category", "seller"]).sort({createdAt:-1});
    res.json(Products);
  } catch (e) {
    console.log(e);
  }
}

export async function getOne(req, res) {
  try {
    const p = req.params;
    console.log(p);
    const prod = await Product.findById(p.getid).populate([
      "category",
      "seller",
    ]);
    res.json(prod);
  } catch (e) {
    console.log(e);
  }
}
export async function create(req, res) {
  try {
    const data = req.body;
    const response = await Product.create(data);
    res.json(response);
  } catch (e) {
    console.log(e);
  }
}

export async function getProductsByUser(req, res) {
  try {
    console.log(req.user);
    const Products = await Product.find({ seller: req.user._id }).populate(
      "category"
    ).sort({createdAt:-1});
    res.json(Products);
  } catch (e) {
    console.log(e);
  }
}

export async function deleteById(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (e) {
    res.status(400).json({ msg: "Some Error Occured!", e });
  }
}

export async function updateById(req,res){
    try{
        const {id}=req.params;
        const updated=req.body; //{isSold:true}
        const val=await Product.findByIdAndUpdate(id,{$set:updated},{new:true,runValidators:true});
        res.status(200).json(val);
    }
    catch(e){
        res.status(400).json({msg:"Some Error Occured!!",e});
    }
}
