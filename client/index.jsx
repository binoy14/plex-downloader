import React from 'react';
import ReactDOM from 'react-dom';
import socket from 'socket.io-client';

class App extends React.Component {
	constructor() {
		super();
		let socket = io();
		socket.on('news', function(data) {
			console.log(data);
			socket.emit('my other event', {my: 'data'});
		});
	}
	render() {
		return <div>Hello World</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('react-view'));