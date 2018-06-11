'use strict';
module.exports = function(app) {
    const createChat = require('../controllers/chat/createChat');
    const getChats = require('../controllers/chat/getChats');
    const getUsers = require('../controllers/chat/getUsers');
    const getUser = require('../controllers/chat/getUser');

    app.route('/users')
        .get(getUsers);

    app.route('/messages')
        .post(createChat);

    app.route('/messages/:username')
        .get(getChats);

    app.route('/user/:username/:password')
        .get(getUser);
};