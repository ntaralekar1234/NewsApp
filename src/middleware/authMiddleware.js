var jwt = require("jsonwebtoken");
var User = require("../models/User");

const authMiddelware = (req, res, next) => {
    if(req.headers && req.headers['authorization']){
       jwt.verify(req.headers['authorization'], process.env.API_SECRET,(err,decode) => {
        if(err) {
          req.user = undefined
          req.message = "invalid token"
          next()
        }
        User.findOne({
            _id: decode.id
          }).then(user => {
            req.user = user;
            next();
          }).catch(dbErr => {
            req.user = undefined
            req.message = "user not found"
            next()
          });
       });
        
    }
    else {
        req.user = undefined;
        req.message = "Authorization header not found";
        next();
    }
}

module.exports = authMiddelware;