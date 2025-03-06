import React from 'react';
import { useTodos } from '../hooks';
import styles from './App.module.css';
import { TodoList } from '../components';

function App() {
	const {
		todos,
		isLoading,
		newTodo,
		setNewTodo,
		isCreating,
		addTodo,
		updateTodo,
		deleteTodo,
	} = useTodos();

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
