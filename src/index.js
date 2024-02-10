const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/auth")
const newsRoutes = require("./routes/news");
const DB = require("./config/db")
require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(newsRoutes,userRoutes,authRoutes);
app.listen(3000,(err) => {
    if(err){
        console.log("Error while running server!")
    }
})


