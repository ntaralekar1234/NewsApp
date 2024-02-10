const userRoutes = require('express').Router();
const {getPreferences, updatePreferences} = require("../controllers/userContoller");
const authMiddelware = require("../middleware/authMiddleware")

userRoutes.get('/users/preferences',authMiddelware, getPreferences)

userRoutes.put('/users/preferences',authMiddelware, updatePreferences)

module.exports = userRoutes