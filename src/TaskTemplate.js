import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

class TaskTemplate extends React.Component{

	render(){
		let taskBorderColor = (this.props.todo.taskStatus==="done") ? "border-success" : "border-warning";
		let changeStatusTextColor = (this.props.todo.taskStatus==="done") ? "text-warning" : "text-success";
		let changeStatusBtnStyle = {fontSize:"15px"};
		

		return (
			<div className={"card mt-3 border " + taskBorderColor} >
				<div className="card-body" >
					<span>
						{this.props.todo.taskText}
					</span>
					<button className="btn btn-sm float-right" onClick={() => this.props.onToggleTaskStatus(this.props.todo)} >
						<i 
							className={"fas fa-exchange-alt " + changeStatusTextColor} 
							style={changeStatusBtnStyle} 
							/>
					</button>
				</div>
			</div>
		);
	}

}

export default TaskTemplate;