'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Users = mongoose.model('Users');

    Users.find({}, function(error, users) {
            if (error) {
                res.send(error);
            } else {
                console.log(users);
                res.json(users);
            }
        }
    )
}