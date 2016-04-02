import express from 'express';

let app = express();

// const router = express.Router();

// router.get('/', (req, res) => {
// 	res.send('Hello');
// });

app.use((req, res) => {
	const HTML = `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8"/>
				<title>Plex Downloader</title>
			</head>
			<body>
				<div id="react-view"></div>
				<script type="application/javascript" src="/bundle.js"></script>
			</body>
		</html>
	`;

	res.end(HTML);
});

module.exports = app;
