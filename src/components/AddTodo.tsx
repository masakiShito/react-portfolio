// src/components/AddTodo.tsx
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

interface AddTodoProps {
    onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim() !== '') {
            onAdd(text);
            setText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="新しいタスクを入力"
            />
            <button onClick={handleAdd}>
                <FaPlus /> 追加
            </button>
        </div>
    );
};

export default AddTodo;
// src/components/TodoItem.tsx