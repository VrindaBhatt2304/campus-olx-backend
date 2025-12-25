import mongoose from "mongoose";

export async function connectDB() {
    try{
        await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("Connection established!");
    })
    .catch((e)=>{
        console.error(e);
    })
    }
    catch(e){
        console.error(e);
        process.exit(1);
    }
}