import styles from './ToDoItem.module.css';
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

    return (
        <li onClick={() => onClick(todo.id)} className={styles["todo-item"]}>
            {todo.text} 
            <button onClick={() => onDelete(todo.id)}>x</button>
        </li>
    );
}

export default ToDoItem;