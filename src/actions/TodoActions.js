const LOAD_TODOS = 'LOAD_TODOS';
const SELECT_TODO = 'SELECT_TODO';
const APPEND_TODO = 'APPEND_TODO';

var loadTodos = () => {
	return (dispatch) => {
		dispatch({ type: LOAD_TODOS });
	}
}

var appendTodo = (text, cleanUIState) => {
	if(text) {
		if(cleanUIState) 
			cleanUIState();
		return {
			type: APPEND_TODO,
			todo: { text },
		}
	}

	return ;
}

var selectTodo = (selected) => {
	return {
		type: SELECT_TODO,
		selected
	}
}

module.exports = {
	loadTodos,
	appendTodo,
	selectTodo,
}