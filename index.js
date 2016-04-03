'use strict';

require('babel-register')({});
var downloadTorrent = require('./controllers/downloadTorrent');
var server = require('./server');

const PORT = process.env.PORT || 3000;

var app = server.listen(PORT, function() {
	console.log('Server listening on ', PORT);
})

var io = require('socket.io')(app);
io.on('connection', (socket) => {
	console.log('connected');
	downloadTorrent('https://webtorrent.io/torrents/sintel.torrent', socket);
});