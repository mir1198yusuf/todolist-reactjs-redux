import {connect} from "react-redux";

import ShowTasksAndCategory from "./ShowTasksAndCategory.js";

const filterTodos = (todos, taskCategory) => {
	//if category is all, return all without filter check
	if (taskCategory==="all"){
		return todos
	}
	return todos.filter(todo => todo.taskStatus===taskCategory);
}

const mapStateToProps = state => {
	return {
		todos : filterTodos(state.todos, state.taskCategory)
	}
}

const TasksListLogic = connect(mapStateToProps) (ShowTasksAndCategory);

export default TasksListLogic;