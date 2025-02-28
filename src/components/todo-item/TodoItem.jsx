import React from 'react';
import styles from './TodoItem.module.css';
import PropTypes from 'prop-types';

function TodoItem({ title, completed }) {
	return (
		<li className={styles.todoItem}>
			<span>Задача:</span>
			{title} - {completed ? '✔️' : '❌'}
		</li>
	);
}

export default TodoItem;

TodoItem.propTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
};
