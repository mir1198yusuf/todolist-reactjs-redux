import React from "react";

import TaskCategoryLogic from "./TaskCategoryLogic.js";
import TaskTemplateLogic from "./TaskTemplateLogic.js";

class ShowTasksAndCategory extends React.Component{

	render(){
		return (
			<>
				<div className="row">
					<div className="col" >
						<TaskCategoryLogic />
					</div>
				</div>
				<div className="row">
					<div className="col" >
						{/* key is not just id bcoz id remains same but nested todo status changes which does not causes re rendering as key remains same */}
						{this.props.todos.map(todo => (<TaskTemplateLogic key={todo.taskId + todo.taskStatus} todo={todo} />))}
					</div>
				</div>
			</>
		);
	}
}

export default ShowTasksAndCategory;