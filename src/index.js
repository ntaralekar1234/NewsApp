const express = require("express");
const routes = require("./routes/routes");
const DB = require("./config/db")
require('dotenv').config();


const app = express();
app.use(routes);
app.listen(3000,(err) => {
    if(err){
        console.log("Error while running server!")
    }
})


