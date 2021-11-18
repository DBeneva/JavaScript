import './ToDoItem.css';
import { useEffect } from 'react';

function ToDoItem({
    todo,
    onClick,
    onDelete
}) {
    useEffect(() => {
        console.log(`${todo.id} mounted`);

        return () => {
            console.log(`${todo.id} unmounted`);
        };
    }, []);

    let listItemClass = `todo-item ${todo.isDone ? 'todo-item-done' : ''}`;

    return (
        <li onClick={() => onClick(todo.id)}
            className={listItemClass}>
            {todo.text}&nbsp;
            <button onClick={(e) => onDelete(e, todo.id)}>x</button>
        </li>
    );
}

export default ToDoItem;