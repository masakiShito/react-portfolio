// src/components/TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: {
        id: number;
        text: string;
        completed: boolean;
    }[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;
