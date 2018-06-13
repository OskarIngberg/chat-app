'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Chat = mongoose.model('Messages');

    let _id = req.params.id;
    Chat.find(
        { users: _id },
        function(error, chats) {
            if (error) {
                res.send(error);
            } else {
                res.json(chats);
            }
        }
    )
}