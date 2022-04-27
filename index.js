const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const dotenv = require("dotenv").config();

const port = 8000;

const app = express();

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Connected to MongoDB!");
    })
    .catch((err)=>{
        console.log(err);
    })

app.use(router);

app.listen(port, async()=> {
    console.log(`Server running on port ${port}`);
})