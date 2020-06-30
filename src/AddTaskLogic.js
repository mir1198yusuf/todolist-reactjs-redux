import {connect} from "react-redux";

import AddTask from "./AddTask.js";


const addTaskActionCreator = (taskText) => {
	return {
		type : "ADD_TASK_ACTION",
		taskText : taskText
	}
};


const mapDispatchToProps = dispatch => {
	return {
		onAddTaskEvent : (taskText) => dispatch(addTaskActionCreator(taskText))
	}
}

const AddTaskLogic = connect(null, mapDispatchToProps) (AddTask);

export default AddTaskLogic;