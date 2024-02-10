var User = require("../models/User");


const getPreferences = (req, res) => {
    
    if(req.user && req.user.preferences) {
        return res.status(200).send({"preferences" : req.user.preferences, "status" : true})
    }
    else {
        return res.status(400).json([{msg:validates.message}])
    }
}

const updatePreferences = (req,res) => {

    if(req.user){
        const update = { preferences: req.body.preferences };
        const condition = { _id: req.user._id };

        User.findOneAndUpdate(condition, update, {new:true}).then( (data) => {
            if(data){
                return res.status(200).send({message : "Preferences has been updated", status : true, data : data});
            }
            return res.status(404).send({message : "Invalid User", status : false, data : data});
        }).catch(err => {
            return res.status(500).send({message : "Error while updating preferences", status : false});
        });
    }
    else {
        return res.status(400).json([{msg:validates.message}])
    }
}

module.exports = {getPreferences,updatePreferences}