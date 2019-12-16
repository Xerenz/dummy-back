const User = require("../models/user.model");

exports.new_test = function(req, res) {
    res.send("New page Here!");
};

exports.user_create = function(req, res) {
    let user = new User(
        {
            name : req.body.name,
            phone : req.body.phone,
            email : req.body.email,
        }
    );
    user.save(function(err) {
        if (err)
            return next(err);
        res.send(user);
    });
};