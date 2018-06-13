'use strict';
module.exports = function(app) {
    const createChat = require('../controllers/chat/createChat');
    const getChats = require('../controllers/chat/getChats');
    const getUsers = require('../controllers/chat/getUsers');
    const getUser = require('../controllers/chat/getUser');
    const loginUser = require('../controllers/chat/loginUser');
    const updateChat = require('../controllers/chat/updateChat');

    app.route('/users')
        .get(getUsers);

    app.route('/user/:id')
        .get(getUser)

    app.route('/messages')
        .post(createChat);

    app.route('/messages/:id')
        .get(getChats)
        .put(updateChat);

    app.route('/user/:username/:password')
        .get(loginUser);
};