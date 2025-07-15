import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}
connectDB()
    .then(() => {
        console.log("Database connection established successfully.");
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
        process.exit(1);
    }); 
export default connectDB; 