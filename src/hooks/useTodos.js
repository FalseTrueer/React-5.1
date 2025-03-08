import { useState } from 'react';
import {
	readTodos,
	addNewTodo,
	updateCurTodo,
	deleteCurTodo,
	filterTodos,
	sortTodos,
} from '../utils';

export function useTodos() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [newTodo, setNewTodo] = useState('');
	const [isCreating, setIsCreating] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	readTodos(setIsLoading, setTodos);

	const addTodo = (event) => {
		event.preventDefault();
		addNewTodo(newTodo, setIsCreating, setTodos, setNewTodo);
	};

	const updateTodo = (id, updatedFields) => updateCurTodo(setTodos, id, updatedFields);

	const deleteTodo = (id) => deleteCurTodo(id, setTodos);

	const filteredTodos = filterTodos(todos, searchQuery);

	const sortedTodos = sortTodos(filteredTodos, isSorted);

	return {
		todos: sortedTodos,
		isLoading,
		newTodo,
		setNewTodo,
		isCreating,
		addTodo,
		updateTodo,
		deleteTodo,
		searchQuery,
		setSearchQuery,
		isSorted,
		setIsSorted,
	};
}
