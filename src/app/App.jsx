import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { TodoList } from '../components';

function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const [newTodo, setNewTodo] = useState('');

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			fetch('http://localhost:3000/todos')
				.then((response) => {
					if (!response.ok) {
						throw new Error(
							`Ошибка ${response.status}: ${response.statusText}`,
						);
					}
					return response.json();
				})
				.then((data) => {
					setTodos(data);
				})
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		}, 0);
	}, []);

	function addTodo(event) {
		event.preventDefault();
		if (!newTodo.trim()) return;

		setIsCreating(true);

		const newTask = {
			id: String(todos.length + 1),
			title: newTodo,
			completed: false,
		};

		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTask),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then((data) => {
				setTodos([...todos, data]);
				setNewTodo('');
			})
			.catch((error) => console.error('Ошибка:', error))
			.finally(() => setIsCreating(false));
	}

	function updateTodo(id, todo) {
		fetch(`http://localhost:3000/todos/${String(id)}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(todo),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then((updatedTodo) => {
				setTodos((prevTodos) =>
					prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)),
				);
			})
			.catch((error) => console.error('Ошибка:', error));
	}

	function deleteTodo(id) {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
			})
			.catch((error) => console.error('Ошибка при удалении:', error));
	}

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<>
					<TodoList
						todos={todos}
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}
					/>
					<form className={styles.form} onSubmit={addTodo}>
						<input
							type="text"
							className={styles.input}
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
							placeholder="Введите задачу"
						/>
						<button
							type="submit"
							className={styles.btn}
							disabled={isCreating}
						>
							{isCreating ? 'Добавление...' : 'Добавить'}
						</button>
					</form>
				</>
			)}
		</div>
	);
}

export default App;
