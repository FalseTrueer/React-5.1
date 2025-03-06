import { useEffect, useState } from 'react';

export function useTodos() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newTodo, setNewTodo] = useState('');
    const [isCreating, setIsCreating] = useState(false);

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

    const addTodo = (event) => {
        event.preventDefault();
        if (!newTodo.trim()) return;

        setIsCreating(true);
        const newTask = { title: newTodo, completed: false };

        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        })
            .then((response) => response.json())
            .then((data) => {
                setTodos((prev) => [...prev, data]);
                setNewTodo('');
            })
            .catch((error) => console.error('Ошибка:', error))
            .finally(() => setIsCreating(false));
    };

    const updateTodo = (id, updatedFields) => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedFields),
        })
            .then((response) => response.json())
            .then((updatedTodo) => {
                setTodos((prev) =>
                    prev.map((todo) => (todo.id === id ? updatedTodo : todo))
                );
            })
            .catch((error) => console.error('Ошибка:', error));
    };

    const deleteTodo = (id) => {
        fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' })
            .then(() => {
                setTodos((prev) => prev.filter((todo) => todo.id !== id));
            })
            .catch((error) => console.error('Ошибка при удалении:', error));
    };

    return { todos, isLoading, newTodo, setNewTodo, isCreating, addTodo, updateTodo, deleteTodo };
}
