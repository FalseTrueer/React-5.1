export const filterTodos = (todos, searchQuery) => {
	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);
	return filteredTodos;
};
