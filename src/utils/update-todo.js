export const updateCurTodo = (setTodos, id, updatedFields) => {
	fetch(`http://localhost:3000/todos/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updatedFields),
	})
		.then((response) => response.json())
		.then((updatedTodo) => {
			setTodos((prev) =>
				prev.map((todo) => (todo.id === id ? updatedTodo : todo))
			);
		})
		.catch((error) => console.error('Ошибка:', error));
};
