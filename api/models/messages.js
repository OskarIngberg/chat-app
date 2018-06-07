'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MessagesSchema = new Schema({
    image: {
        type: String
    },
    messages: [
        {
            message: {
                type: String,
                required: 'Must have a message'
            },
            time: {
                type: Number,
                required: 'Must have a timestamp'
            },
            user: {
                type: Number,
                required: 'Must have a user'
            }
        }
    ],
    title: {
        type: String,
        required: 'Muste have a title'
    },
    users: [
        {
            id: {
                type: Number,
                required: 'Must have atleast one user'
            }
        }
    ]
});

module.exports = mongoose.model('Messages', MessagesSchema);