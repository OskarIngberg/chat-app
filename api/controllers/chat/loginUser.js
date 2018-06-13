'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Users = mongoose.model('Users');

    const username = req.params.username;
    const password = req.params.password;

    Users.find({
        username,
        password
    }, 
    function(error, user) {
        if (error) {
            res.send(error);
        } else {
            res.json(user);
        }
    });
}