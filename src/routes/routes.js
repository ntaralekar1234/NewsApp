const routes = require('express').Router();
const bodyParser = require("body-parser");
const {signin, signup} = require("../controllers/authContoller");
const {getPreferences, updatePreferences} = require("../controllers/userContoller");
const {getNews} = require("../controllers/newsController");
const authMiddelware = require("../middleware/authMiddleware")

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.get('/', (req, res)=>{
    res.status(200).send("Welcome to the news app");
});
routes.post('/register', signup);
routes.post('/signin', signin);

routes.get('/users/preferences',authMiddelware, getPreferences)

routes.put('/users/preferences',authMiddelware, updatePreferences)

routes.get('/news',authMiddelware, getNews);

module.exports = routes;
