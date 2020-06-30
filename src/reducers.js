function todosReducer(state=[], action){

	switch(action.type){

		case "ADD_TASK_ACTION":
			return [
				...state, 	//existing state todos array
				{
					taskId : state.length,	//for demo purpose we can use length as id
					taskText : action.taskText,
					taskStatus : "notdone"
				}
			]

		case "TOGGLE_TASK_STATUS_ACTION" : 
			return state.map(
				todo => {
					if (todo.taskId===action.todo.taskId){
						todo.taskStatus = (todo.taskStatus==="done" ? "notdone" : "done")
					}
					return todo;
				}
			);

		default: 
			return state
	}
}


function taskCategoryReducer(state="all", action){

	switch(action.type){
		case "ALL_TASKS_ACTION" : 
			return action.taskCategory

		case "DONE_TASKS_ACTION" : 
			return action.taskCategory

		case "NOTDONE_TASK_ACTION" : 
			return action.taskCategory

		default:
			return state
	}
}


function rootReducer (state={}, action){

	return {
		todos : todosReducer(state.todos, action),
		taskCategory : taskCategoryReducer(state.taskCategory, action)
	}
}

export {rootReducer};
