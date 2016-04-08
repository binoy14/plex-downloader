import React from 'react';
import ReactDOM from 'react-dom';
let socket = io();

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			downloadPercent: null,
			inputVal: null
		};
		var that = this;
		socket.on('download', (data) => {
			console.log(data);
			this.setState({
				downloadPercent: data.completePercent
			});
		});

		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(event) {
		this.setState({inputVal : event.target.value});
	}

	submitForm() {
		socket.emit('sendInput', {inputVal: this.state.inputVal});
	}

	render() {
		return (
			<div>
				Hello World {this.state.downloadPercent}
				<input 
					type="text"
					value={this.state.inputVal}
					onChange={this.handleChange}
				/>
				<button onClick={this.submitForm}>
					Submit
				</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-view'));