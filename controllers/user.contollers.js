import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function get(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    console.log(e);
  }
}

export async function register(req, res) {
  try {
    const { name, email, password, phone, college } = req.body;
    const data = await User.exists({ email });

    if (!data) {
      const hashedpw = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        phone,
        college,
        password: hashedpw,
      });
      const token = jwt.sign({ user }, process.env.JWT_KEY);
      res.status(201).json({ token, user });
    } else {
      res.status(409).json({ msg: "Email already eixsts." });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      console.log(password, user.password);
      const pw = await bcrypt.compare(password, user.password);
      if (pw) {
        const passw = user.password;
        const token = jwt.sign({ user }, process.env.JWT_KEY);
        res.status(200).json({ token, user });
      } else {
        res.status(401).json({ msg: "Wrong Password." });
      }
    } else {
      res.status(401).json({ msg: "Email does not exist." });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getuser(req, res) {
  res.status(200).json(req.user);
}

export async function update(req, res) {
  try {
    const user = req.user;

    const update = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { ...user, ...update },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: "Some Error Occured!!",error:e });
  }
}

export async function addWishlist(req,res)
{
  try{
    const user=req.user;
  const id=req.body;
  console.log(id);
  const prod_id=id.prod_id;
  const updated=await User.findByIdAndUpdate(user._id,{...user,wishlist:[...user.wishlist,prod_id]},
    {new:true,runValidators:true}
  )
  const token=jwt.sign({user:updated}, process.env.JWT_KEY);
  res.status(200).json({token,user:updated});
  }
  catch(e)
  {
    console.log(e);
    res.status(400).json({msg:"Some error Occured!!",e});
  }
}