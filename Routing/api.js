import express from 'express';
import downloadTorrent from '../controllers/downloadTorrent';

var router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello from api');
});

router.post('/download', (req, res) => {
	console.log(req.body.url);
	downloadTorrent(req.body.url);
	res.end('Downloading');
});

export default router;