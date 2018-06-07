'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Chat = mongoose.model('Messages');

    let newChat = new Chat(req.body);
    newChat.save(function(error, chat) {
        if (error) {
            res.send(error);
        } else {
            res.json(chat);
        }
    });
}