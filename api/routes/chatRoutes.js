'use strict';
module.exports = function(app) {
    const createChat = require('../controllers/chat/createChat');
    const getChats = require('../controllers/chat/getChats');
    const getUsers = require('../controllers/chat/getUsers'); 

    app.route('/users')
        .get(getUsers);

    app.route('/messages')
        .post(createChat);

    app.route('/messages/:user')
        .get(getChats);
};