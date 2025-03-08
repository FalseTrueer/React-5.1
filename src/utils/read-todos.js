import { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const readTodos = (setIsLoading, setTodos) => {
	useEffect(() => {
		setIsLoading(true);
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val();
			setTodos(loadedTodos || {});
			setIsLoading(false);
		});
	}, []);
};
