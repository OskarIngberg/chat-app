'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Chat = mongoose.model('Messages');

    console.log('ping');

    let _id = req.params.id;

    Chat.findOneAndUpdate(
        { _id },
        req.body,
        { new: true },
        function(error, chat) {
        if (error) {
            res.send(error);
            console.log(error);
        } else {
            console.log(JSON.stringify(chat));
            res.json(chat);
        }
    });
}