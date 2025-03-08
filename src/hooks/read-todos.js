import { useEffect } from 'react';

export const readTodos = (setIsLoading, setTodos) => {
	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3000/todos')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
				}
				return response.json();
			})
			.then((data) => setTodos(data))
			.catch((error) => console.error('Ошибка:', error))
			.finally(() => setIsLoading(false));
	}, []);
}
