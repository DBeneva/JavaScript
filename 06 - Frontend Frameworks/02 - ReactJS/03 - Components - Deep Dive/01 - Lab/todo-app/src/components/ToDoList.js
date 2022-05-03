import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import ToDoItem from "./ToDoItem";
import { createToDo } from '../services/toDoService';

const API_URL = 'http://localhost:3030/jsonstore';

function ToDoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/todos`)
            .then(res => res.json())
            .then(todosResult => {
                setTodos(Object.values(todosResult));
            });
    }, []);

    const onInputBlur = (e) => {
        if (e.target.value === '') return;

        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        };

        
        createToDo(todo).then(createdTodo => {
            console.log(createdTodo);
            setTodos(state => [...state, createdTodo]);
        });

        e.target.value = '';
    };

    const deleteTodoItemClickHandler = (e, id) => {
        e.stopPropagation();
        setTodos(state => state.filter(todo => todo.id !== id));
    };

    const toggleTodoItemClickHandler = (id) => {
        setTodos(state => {
            return state.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo);
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