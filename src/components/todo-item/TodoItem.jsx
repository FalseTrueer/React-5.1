import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import PropTypes from 'prop-types';

export function TodoItem({ todo, updateTodo, deleteTodo }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(todo.title);
	const [isCompleted, setIsCompleted] = useState(todo.completed);

	function handleEditClick() {
		setIsEditing(true);
	}

	function handleChange(event) {
		setEditedTitle(event.target.value);
	}

	function handleBlur() {
		updateTodo(todo.id, { title: editedTitle });
		setIsEditing(false);
	}

	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			handleBlur();
		}
	}

	function toggleComplete() {
		const newCompleted = !isCompleted;
		setIsCompleted(newCompleted);
		updateTodo(todo.id, { completed: newCompleted });
	}

	function handleDelete() {
		deleteTodo(todo.id);
	}

	return (
		<li className={styles.todoItem}>
			<span className={styles.task}>Задача:</span>
			{isEditing ? (
				<input
					type="text"
					value={editedTitle}
					onChange={handleChange}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
					autoFocus
					className={styles.input}
				/>
			) : (
				<span>{todo.title}</span>
			)}
			<button className={styles.svg} onClick={toggleComplete}>
				{isCompleted ? '✔️' : '❌'}
			</button>
			<button className={styles.svg} onClick={handleEditClick}>
				🖉
			</button>
			<button className={styles.svg} onClick={handleDelete}>
				🗑️
			</button>
		</li>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired,
	updateTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
