import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title:
    {
        type:String,
        required:[true,"Title is a must"],
        trim: true
    },
    price:
    {
        type: Number,
        required:[true,"Specify the price"],
    },
    description:
    {
        type:String,
        required:[true,"Description is must"]
    },
    images:
    {
        type:[String],
        required:[true,"Images are must"]
    },
    category:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    seller:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    isSold:
    {
        type:Boolean,
        default:false
    }
},{timestamps:true});

const Product=mongoose.model("Product",productSchema);

export default Product;