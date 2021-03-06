'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Users = mongoose.model('Users');

    const _id = req.params.id;

    function removePassword(user) {
        let userCopy = user;
        userCopy.password = '';
        return userCopy;
    }

    Users.find({
        _id
    }, 
    function(error, user) {
        if (error) {
            res.send(error);
        } else {
            res.json(removePassword(user));
        }
    });
}