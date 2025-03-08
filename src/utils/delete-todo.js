import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const deleteCurTodo = (id) => {
	const curTodo = ref(db, `todos/${id}`);

	remove(curTodo).catch((error) => console.error('Ошибка удаления задачи:', error));
};
