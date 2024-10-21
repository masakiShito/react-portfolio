import React from 'react';
import styles from '../styles/TodoItem.module.css';

interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <div className={styles.todoItem}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span className={todo.completed ? styles.completed : ''}>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>削除</button>
        </div>
    );
};

export default TodoItem;
