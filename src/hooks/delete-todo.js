export const deleteCurTodo = (id, setTodos) => {
	fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' })
		.then(() => {
			setTodos((prev) => prev.filter((todo) => todo.id !== id));
		})
		.catch((error) => console.error('Ошибка при удалении:', error));
};
