import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    title:
    {
        type:String,
        required:[true,"Title is a must"],
        trim: true
    }
},{timestamps:true});

const Category=mongoose.model("Category",categorySchema);

export default Category;