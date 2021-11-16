import ToDoItem from "./ToDoItem";

function ToDoList() {
    const todos = [
        { id: 1, text: 'Clean my room' },
        { id: 2, text: 'Wash the dishes' },
        { id: 3, text: 'Go to the gym!' }
    ];

    return (
        <ul>
            {todos.map(x => <ToDoItem key={x.id} text={x.text} />)}
        </ul>
    );
}

export default ToDoList;