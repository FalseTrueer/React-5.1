import React from 'react';
import styles from './TodoList.module.css';
import PropTypes from 'prop-types';
import TodoItem from '../';

function TodoList({ todos }) {
	return (
		<ul className={styles.todoList}>
			{todos.map(({ id, title, completed }) => {
				return <TodoItem key={id} title={title} completed={completed} />;
			})}
		</ul>
	);
}

export default TodoList;

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		}),
	).isRequired,
};
