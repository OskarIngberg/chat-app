'use strict';
module.exports = function(req, res) {
    const mongoose = require('mongoose');
    const Chat = mongoose.model('Messages');

    let user = req.params.user;
    Chat.find(
        { user },
        function(error, chats) {
            if (error) {
                res.send(error);
            } else {
                res.json(chats);
            }
        }
    )
}