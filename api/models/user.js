'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        required: 'User must have a username'
    },
    password: {
        type: String,
        required: 'User must have a password'
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Users', UserSchema);