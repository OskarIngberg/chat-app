'use strict';
module.exports = function(app) {
    var createChat = require('../controllers/chat/createChat');
    var getChats = require('../controllers/chat/getChats');

    app.route('/messages')
        .post(createChat);

    app.route('/messages/:user')
        .get(getChats);
};