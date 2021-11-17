import { useState } from 'react';
import uniqid from 'uniqid';
import ToDoItem from "./ToDoItem";

function ToDoList() {
    const [todos, setTodos] = useState([
        { id: 'kw2krau0', text: 'Clean my room', isDone: false },
        { id: 'kw2krn18', text: 'Wash the dishes', isDone: false },
        { id: 'kw2kryv1', text: 'Go to the gym!', isDone: false }
    ]);

    const onInputBlur = (e) => {
        if (e.target.value === '') return;
        
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        };

        setTodos(state => [...state, todo]);
        e.target.value = '';
    };

    const deleteTodoItemClickHandler = (id) => {
        setTodos(state => state.filter(todo => todo.id !== id));
    };

    const toggleTodoItemClickHandler = (id) => {
        setTodos(state => {
            let selectedToDo = state.find(x => x.id === id);
            let toggledToDo = {...selectedToDo, isDone: !selectedToDo.isDone};
            let restToDos = state.filter(x => x.id !== id);

            return [...restToDos, toggledToDo];
        });
    };

    return (
        <>
            <label htmlFor="todo">Add todo: </label>
            <input type="text" onBlur={onInputBlur} name="todo" />
            <ul>
                {todos.map(x =>
                    <ToDoItem
                        key={x.id}
                        todo={x}
                        onClick={toggleTodoItemClickHandler}
                        onDelete={deleteTodoItemClickHandler} />
                )}
            </ul>
        </>
    );
}

export default ToDoList;