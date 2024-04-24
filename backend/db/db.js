import { mongoose } from "mongoose";
import "dotenv/config";





const db = async()=>{

    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected successfully to Database")
    } catch (err) {

        console.log("database connection failed: ", err)
        
    }


};


export default db