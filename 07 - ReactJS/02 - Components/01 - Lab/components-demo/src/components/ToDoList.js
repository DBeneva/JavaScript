import { useState } from "react";
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState('');

    const clickHandler = () => {
        setCount(count + 1);
        setName('Pesho');
    };

    const inputChangeHandler = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <h2>Counter</h2>
            { name == 'Pesho' ? <h3>He is the best!</h3> : <h3>Nah</h3> }

            <ul>
                <ToDoListItem>{count} - {name}</ToDoListItem>
            </ul>

            <input type="text" onChange={inputChangeHandler} />

            <button onClick={clickHandler}>+</button>
        </>
    );
}

export default ToDoList;