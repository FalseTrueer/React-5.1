export const filterTodos = (todos, searchQuery) => {
	const todosArray = Object.entries(todos).map(([id, todo]) => ({
		id,
		...todo,
	}));

	const filteredTodos = todosArray.filter((todo) =>
		todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return filteredTodos;
};
