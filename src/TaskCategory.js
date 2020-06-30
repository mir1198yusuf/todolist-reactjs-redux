import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

class TaskCategory extends React.Component{

	render(){
		return (
			<div className="btn-group mt-3" >
				<button className="btn btn-primary text-white mr-2" onClick={() => this.props.onCategoryChange("all")} >All</button>
				<button className="btn btn-success text-white mr-2" onClick={() => this.props.onCategoryChange("done")} >Done</button>
				<button className="btn btn-warning text-white mr-2" onClick={() => this.props.onCategoryChange("notdone")} >Not done</button>
			</div>
		);
	}

}

export default TaskCategory;