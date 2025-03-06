import React from 'react';
import styles from './TodoList.module.css';
import PropTypes from 'prop-types';
import { TodoItem } from '../';

export function TodoList({ todos, updateTodo, deleteTodo }) {
	return (
		<ul className={styles.todoList}>
			{todos.length === 0 ? (
				<p className={styles.empty}>Задач не найдено</p>
			) : (
				todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}
					/>
				))
			)}
		</ul>
	);
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			title: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		}),
	).isRequired,
	updateTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
