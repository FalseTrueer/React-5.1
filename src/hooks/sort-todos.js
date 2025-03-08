export const sortTodos = (filteredTodos, isSorted) => {
	const sortedTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
		: filteredTodos;
	return sortedTodos;
};
