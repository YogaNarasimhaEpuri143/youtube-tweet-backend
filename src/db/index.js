import mongoose from "mongoose";
import { DB_NAME } from "./../constants.js";

const connectDB = async () => {
    try {
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.log("ERROR", err);
        process.exit(1); // exited with some error.
    }
};

export default connectDB;
