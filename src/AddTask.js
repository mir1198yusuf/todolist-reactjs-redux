import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

class AddTask extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			addTaskInput : ''
		}
	}

	onInputChange = (ev) => {
		this.setState({
			[ev.target.name] : ev.target.value
		});
	}

	onKeyPressed = (ev) => {
		if (ev.keyCode===13){
			//enter key code is 13
			this.props.onAddTaskEvent(this.state.addTaskInput);
		}
	}

	render(){
		return (
			<>
				<input 
					type="text" 
					name="addTaskInput" 
					className="form-control" 
					placeholder="Type task and press enter..." 
					onChange={this.onInputChange}
					onKeyDown={this.onKeyPressed}

					/>
			</>
		);
	}
}

export default AddTask;