import express from 'express';
import bodyParser from 'body-parser';
import api from './Routing/api';

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api',api);

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
				<script type="application/javascript" src="https://cdn.socket.io/socket.io-1.3.5.js"></script>
				<script type="application/javascript" src="/bundle.js"></script>
			</body>
		</html>
	`;

	res.end(HTML);
});

module.exports = app;
