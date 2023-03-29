const url = 'http://localhost:3030/jsonstore/tasks';

const loadBoardBtn = document.getElementById('load-board-btn');
const createTaskBtn = document.getElementById('create-task-btn');
const toDoSection = document.querySelector('#todo-section ul');
const inProgressSection = document.querySelector('#in-progress-section ul');
const codeReviewSection = document.querySelector('#code-review-section ul');
const doneSection = document.querySelector('#done-section ul');

function attachEvents() {
    loadBoardBtn.addEventListener('click', loadBoard);
    createTaskBtn.addEventListener('click', createTask);
}

function loadBoard() {
    toDoSection.innerHTML = '';
    inProgressSection.innerHTML = '';
    codeReviewSection.innerHTML = '';
    doneSection.innerHTML = '';

    let tasks = { ToDo: [], ['In Progress']: [], ['Code Review']: [], Done: [] };

    request().then((data) => {
        console.log(Object.values(data));
    
        Object.values(data).forEach(t => tasks[t.status].push(t)); 
        
        tasks.ToDo.forEach(t => {
            toDoSection.appendChild(createListItem(t));
        });
        tasks['In Progress'].forEach(t => {
            inProgressSection.appendChild(createListItem(t));
        });
        tasks['Code Review'].forEach(t => {
            codeReviewSection.appendChild(createListItem(t));
        });
        tasks.Done.forEach(t => {
            doneSection.appendChild(createListItem(t));
        });
    });
}

function createTask() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const title = titleInput.value;
    const description = descriptionInput.value;
    titleInput.value = '';
    descriptionInput.value = '';
    const task = { title, description, status: 'ToDo' };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    };
    request(options).then(() => loadBoard());
}

function createListItem(task) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'task');
    listItem.id = task._id;
    const title = document.createElement('h3');
    title.textContent = task.title;
    const description = document.createElement('p');
    description.textContent = task.description;
    const button = document.createElement('button');
    
    let textBtn;
    switch (task.status) {
        case 'ToDo': textBtn = 'Move to In Progress'; break;
        case 'In Progress': textBtn = 'Move to Code Review'; break;
        case 'Code Review': textBtn = 'Move to Done'; break;
        case 'Done': textBtn = 'Close'; break;
    }
    
    button.textContent = textBtn;
    
    if (task.status !== 'Done') {
        button.addEventListener('click', moveTask);
    } else {
        button.addEventListener('click', closeTask);
    }

    listItem.appendChild(title);
    listItem.appendChild(description);
    listItem.appendChild(button);
    return listItem;
}

function moveTask(e) {
    const li = e.target.parentElement;
    const article = li.parentElement.parentElement;
    const title = e.target.parentNode.children[0].textContent;
    const description = e.target.parentNode.children[1].textContent;
    const id = e.target.parentNode.id;

    let newStatus = '';

    switch (article.id) {
        case 'todo-section': newStatus = 'In Progress'; break;
        case 'in-progress-section': newStatus = 'Code Review'; break;
        case 'code-review-section': newStatus = 'Done'; break;
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, status: newStatus, _id: id })
    };   
        
    request(options, id).then(() => loadBoard());        
}

function closeTask(e) {
    const id = e.target.parentNode.id;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    request(options, id).then(() => loadBoard());        
}

function request(options, id) {
    try {
        let response;
        if (options && options.method == 'PATCH') {
            response = fetch(`${url}/${id}`, options);
        } else if (options && options.method == 'DELETE') {
            response = fetch(`${url}/${id}`, options).then((res) => res.json());
        } else {
            response = fetch(url, options).then((res) => res.json());
        }
        
        return response;
    } catch (error) {
        throw error;
    }
}

attachEvents();