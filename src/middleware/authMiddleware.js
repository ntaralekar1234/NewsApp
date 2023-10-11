var jwt = require("jsonwebtoken");
var User = require("../models/User");

const authMiddelware = (req, res, next) => {
    console.log(req.headers)
    if(req.headers && req.headers['authorization']){
       jwt.verify(req.headers['authorization'], process.env.API_SECRET,(err,decode) => {
        if(err) {
            res.status(403).send({
                message: "Invalid JWT token"
            });
        }
        User.findOne({
            _id: decode.id
          }).then(user => {
            req.user = user;
            next();
          }).catch(err => {
            res.status(500)
            .send({
              message: err
            });
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