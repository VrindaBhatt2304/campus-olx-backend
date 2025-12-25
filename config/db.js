import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongooseURI = process.env.DB_URL
        if (!mongooseURI) {
            throw new Error("MONGO DB URI is not found.");
        }
        await mongoose.connect(mongooseURI, {});
    }
    catch (e) {
        console.log("Mongoose Connection Error:", e.message);
        process.exit(1);
    }
}