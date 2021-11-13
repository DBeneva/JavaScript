function ToDoList() {
    const todos = [
        { id: 1, text: 'Clean my room' },
        { id: 2, text: 'Wash the dishes' },
        { id: 3, text: 'Go to the gym' }
    ];

    return (
        <ul>
            {todos.map(x => <li key={x.id}>{x.text}</li>)}
        </ul>
    );
}

export default ToDoList;