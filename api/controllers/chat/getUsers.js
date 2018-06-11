'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Users = mongoose.model('Users');

    function removePassword(users) {
        users.forEach(user => {
            user.password = '';
        });

        return users;
    }

    Users.find({}, function(error, users) {
            if (error) {
                res.send(error);
            } else {
                res.json(removePassword(users));
            }
        }
    )
}