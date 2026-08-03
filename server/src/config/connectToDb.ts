import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async (): Promise<void> => {
    try {
        mongoose.set("strictQuery", true);

        const connection = await mongoose.connect(env!.MONGODB_URI!, {
            dbName: env!.DB_NAME!,
            maxPoolSize: 20,
            minPoolSize: 5,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            retryWrites: true,
        });

        console.log(
            `✅ MongoDB Connected | ${connection.connection.name} @ ${connection.connection.host}`
        );
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB");
        console.error(error);

        process.exit(1);
    }
};

export default connectDB;