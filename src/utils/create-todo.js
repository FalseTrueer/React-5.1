import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const addNewTodo = (newTodo, setIsCreating, setNewTodo) => {
	if (!newTodo.trim()) return;

	setIsCreating(true);
	const newTask = { title: newTodo, completed: false };

	const productsDbRef = ref(db, 'todos');

	push(productsDbRef, newTask)
		.catch((error) => console.error('Ошибка:', error))
		.finally(() => {
			setNewTodo('');
			setIsCreating(false);
		});
};
