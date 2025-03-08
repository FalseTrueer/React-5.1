export const addNewTodo = (newTodo, setIsCreating, setTodos, setNewTodo) => {
	if (!newTodo.trim()) return;

	setIsCreating(true);
	const newTask = { title: newTodo, completed: false };

	fetch('http://localhost:3000/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newTask),
	})
		.then((response) => response.json())
		.then((data) => {
			setTodos((prev) => [...prev, data]);
			setNewTodo('');
		})
		.catch((error) => console.error('Ошибка:', error))
		.finally(() => setIsCreating(false));
};
