const authRoutes = require('express').Router();
const {signin, signup} = require("../controllers/authContoller");

authRoutes.post('/register', signup);
authRoutes.post('/signin', signin);

module.exports = authRoutes
