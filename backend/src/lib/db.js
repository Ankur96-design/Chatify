import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const { MONGO__URL} = process.env;
        if (!MONGO__URL)  throw new Error("MONGO_UL is not set");

        const conn = await mongoose.connect(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB CONNECTED:", conn.connection.host);
        
    } catch (error) {
        console.error("Error connecting to MONGGODB:", error);
        process.exit(1); // 1 status code means fail, o means success
    }
}