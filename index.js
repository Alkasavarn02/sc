const express = require("express");
require("dotenv").config();
const dbConnect = require("./Config/dataBaseConfig");
const router = require("./Routes/userAuth");

const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true           
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)

app.listen(PORT,()=>{
    console.log(`Server started at Port ${process.env.PORT}`)
})

dbConnect();