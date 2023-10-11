var User = require("../models/User");


const getPreferences = (req, res) => {

    if(req.user && req.user.preferences) {
        res.status(200).send({"preferences" : req.user.preferences, "status" : true})
    }
}

const updatePreferences = (req,res) => {
    const update = { preferences: req.body.preferences };
    const condition = { _id: req.user._id };

    User.findOneAndUpdate(condition, update, {new:true}).then( (data) => {
        if(data){
            res.status(200).send({message : "Preferences has been updated", status : true, data : data});
        }
        res.status(404).send({message : "Invalid User", status : false, data : data});
    }).catch(err => {
        res.status(500).send({message : "Error while updating preferences", status : false});
    });
}

module.exports = {getPreferences,updatePreferences}