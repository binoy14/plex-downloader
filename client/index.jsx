import React from 'react';
import ReactDOM from 'react-dom';
import socket from 'socket.io-client';

class App extends React.Component {
	constructor() {
		super();
		let socket = io();
		this.state = {
			downloadPercent: null
		}
		var that = this;
		socket.on('download', function(data) {
			console.log(data);
			that.setState({
				downloadPercent: data.completePercent
			});
			// socket.emit('my other event', {my: 'data'});
		});
	}
	render() {
		return <div>Hello World {this.state.downloadPercent}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('react-view'));