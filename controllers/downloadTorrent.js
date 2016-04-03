import fs from 'fs';
import WebTorrent from 'webtorrent';

const engine = function(torrentFile, socket){
	let client = new WebTorrent();

	client.add(torrentFile, function(torrent) {
		torrent.files.forEach((file) => {
			console.log('Started downloading', file.name);
			file.getBuffer((err, buffer) => {
				if(err) {
					throw Error(err);
					return;
				}
				fs.writeFile(file.name, buffer, (err) => {
					if(err) {
						throw Error(err);
					}
				});
			});
		});

		torrent.on('download', (chunkSize) => {
			let num = (torrent.progress * 100).toFixed(2) + ' %';
			console.log(num);
			socket.emit('download', {completePercent: num});
		});
	});
};

module.exports = engine;

