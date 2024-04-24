import "dotenv/config";
import express from "express";
import cors from "cors"
import db from "./db/db.js";
import transRoute from "./routes/transactionRoute.js";

const PORT = process.env.PORT
const app = express()

// middleware

app.use(express.json());
app.use(cors());


app.use('/',transRoute )

app.get('/',(req,res)=>{

    res.send("Hello world");
})


const server = ()=>{
    db().then(()=>{

        app.listen(PORT,()=>{
            console.log("The server is running on Port: ",PORT);
    
        })

    })

 
    


   
};



server();