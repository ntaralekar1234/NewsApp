const newsRoutes = require('express').Router();

const {getNews} = require("../controllers/newsController");
const authMiddelware = require("../middleware/authMiddleware")



newsRoutes.get('/', (req, res)=>{
    res.status(200).send("Welcome to the news app");
});



newsRoutes.get('/news',authMiddelware, getNews);

module.exports = newsRoutes;
