import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:
    {
        type:String,
        required:[true,"Should have a name"],
        trim: true
    },
    college:
    {
        type:String,
        required:[true,"Give your College"]
    },
    phone:
    {
        type: Number,
        required:[true,"Phone number must be there"]
    },
    email:
    {
        type:String,
        required:[true,"enter valid Email"],
        unique:true
    },
    password:
    {
        type:String,
        required:[true,"Enter your password"]
    },
    picture:
    {
        type:String,

    },
    wishlist:
    [
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
        }
    ]
},{timestamps:true});

const User=mongoose.model("User",userSchema);

export default User;