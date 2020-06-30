import {connect} from "react-redux";

import TaskCategory from "./TaskCategory.js";

const changeCategoryActionCreator = btnCategory => {
	
	switch (btnCategory){
		case "all" : 
			return {
				type : "ALL_TASKS_ACTION",
				taskCategory : "all"
			}

		case "done" :
			return {
				type : "DONE_TASKS_ACTION",
				taskCategory : "done"
			}

		case "notdone" :
			return {
				type : "NOTDONE_TASK_ACTION",
				taskCategory : "notdone"
			}

		default: 	//default case not needed here
			return null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCategoryChange : btnCategory => dispatch(changeCategoryActionCreator(btnCategory))
	}
}

const TaskCategoryLogic = connect(null, mapDispatchToProps) (TaskCategory);

export default TaskCategoryLogic;