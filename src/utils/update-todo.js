import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const updateCurTodo = (id, updatedFields) => {
	const curTodo = ref(db, `todos/${id}`);

	set(curTodo, updatedFields).catch((error) =>
		console.error('Ошибка обновления задачи:', error),
	);
};
