'use strict';
module.exports = function(http) {
    var io = require('socket.io')(http);

    io.on('connection', function(socket) {
        console.log('a user connected');

        socket.on('disconnect', function() {
            console.log('user disconnected');
        });

        socket.on('clientMessage', (message) => {
            console.log("Message Received: " + JSON.stringify(message));
            io.emit('serverMessage', { type:'new-message', message });
        });
    });
}