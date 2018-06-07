const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http').Server(app);

const config = require('./config');

const socket = require('./controllers/socket');
const localhostFix = require('./controllers/locolhostFix');
const routes = require('./routes/chatRoutes');

const Messages = require('./models/messages');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoPort);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Run socket.io
socket(http);

// Localhost fix
localhostFix(app);

// Routes
routes(app);

http.listen(3000, function(){
  console.log('listening on *:3000');
});
