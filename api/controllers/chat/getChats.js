'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Chat = mongoose.model('Messages');

    let username = req.params.username;
    Chat.find(
        { username },
        function(error, chats) {
            if (error) {
                res.send(error);
            } else {
                res.json(chats);
            }
        }
    )
}