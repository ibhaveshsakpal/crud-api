const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 8000;

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

app.listen(PORT, async()=> {
    console.log(`Server running on port ${PORT}`);
})