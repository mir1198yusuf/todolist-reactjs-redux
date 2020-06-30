import {connect} from "react-redux";

import TaskTemplate from "./TaskTemplate.js";

const toggleTaskStatusActionCreator = todo => {
	return {
		type : "TOGGLE_TASK_STATUS_ACTION",
		todo : todo
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onToggleTaskStatus : todo => dispatch(toggleTaskStatusActionCreator(todo))
	}
}

const TaskTemplateLogic = connect(null, mapDispatchToProps) (TaskTemplate);

export default TaskTemplateLogic;