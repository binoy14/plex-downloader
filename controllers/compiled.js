'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _readTorrent = require('read-torrent');

var _readTorrent2 = _interopRequireDefault(_readTorrent);

var _torrentStream = require('torrent-stream');

var _torrentStream2 = _interopRequireDefault(_torrentStream);

var _sockjs = require('sockjs');

var _sockjs2 = _interopRequireDefault(_sockjs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _webtorrent = require('webtorrent');

var _webtorrent2 = _interopRequireDefault(_webtorrent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var engine = function engine(torrentFile) {
	// 	readTorrent(torrentFile, (err, torrent) => {
	// 		if(err)
	// 			throw new err;

	// 		var tor = streamTorrent(torrent, {path: './'});

	// 		tor.on('ready', () => {
	// 			tor.files.forEach((file) => {
	// 				var stream = file.select();
	// 			})
	// 		});

	// 		tor.on('download', (torr) => {
	// 			console.log(torr);
	// 		});

	// 		tor.on('idle', () => {
	// 			console.log('done');
	// 		});
	// 	});

	var client = new _webtorrent2.default();

	client.add('./sintel.torrent', function (torrent) {
		torrent.files.forEach(function (file) {
			console.log('Started downloading', file.name);
			file.getBuffer(function (err, buffer) {
				if (err) {
					throw new err();
					return;
				}
				_fs2.default.writeFile(file.name, buffer, function (err) {
					if (err) ;
					throw new err();
				});
			});
		});

		torrent.on('download', function (chunkSize) {
			console.log(torrent.progress);
		});
	});
};

exports.default = engine;
