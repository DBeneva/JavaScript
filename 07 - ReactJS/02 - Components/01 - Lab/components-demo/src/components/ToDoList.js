import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    return (
        <>
            <h2>Tasks</h2>
            <ul>
                <ToDoListItem text="Clean your room" />
                <li>Go shopping</li>
                <li>Learn React</li>
                <li>Learn class components</li>
            </ul>
        </>
    );
}

export default ToDoList;