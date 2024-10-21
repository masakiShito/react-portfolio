// src/pages/TodoPage.tsx
import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const handleToggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h2>ToDoリスト</h2>
            <AddTodo onAdd={handleAddTodo} />
            <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </div>
    );
};

export default TodoPage;
