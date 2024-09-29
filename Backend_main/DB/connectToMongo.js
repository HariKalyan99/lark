import mongoose from "mongoose";


const connectToMongo = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection successfull to MONGO_DB", conn.connection.host)
    } catch (error) {
        console.log("Error connecting to the MONGO_DB", error);
    }
}

export default connectToMongo;