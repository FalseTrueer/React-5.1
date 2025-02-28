import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { TodoList } from '../components';

function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/users/1/todos')
				.then((response) => {
					if (!response.ok) {
						throw new Error('Response Error');
					}
					return response.json();
				})
				.then((data) => {
					setTodos(data);
				})
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false));
		}, 2000);
	}, []);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<TodoList todos={todos} />
			)}
		</div>
	);
}

export default App;
