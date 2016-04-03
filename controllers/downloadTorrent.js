import readTorrent from 'read-torrent';
import streamTorrent from 'torrent-stream';
import fs from 'fs';
import WebTorrent from 'webtorrent';

const engine = function(torrentFile){	
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
	
	let client = new WebTorrent();

	client.add(torrentFile, function(torrent) {
		torrent.files.forEach((file) => {
			console.log('Started downloading', file.name);
			file.getBuffer((err, buffer) => {
				if(err) {
					console.log(err);
					return;
				}
				fs.writeFile(file.name, buffer, (err) => {
					if(err) {
						console.log(err);
					}
				});
			});
		});

		torrent.on('download', (chunkSize) => {
			let num = torrent.progress * 100;
			console.log(num.toFixed(2) + ' %');
		});
	});

};


export default engine;

