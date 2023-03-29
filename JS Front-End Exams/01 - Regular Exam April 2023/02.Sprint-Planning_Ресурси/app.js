window.addEventListener('load', solve);

function solve() {
    const form = document.getElementById('create-task-form');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const labelSelect = document.getElementById('label');
    const pointsInput = document.getElementById('points');
    const assigneeInput = document.getElementById('assignee');
    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    const taskID = document.getElementById('task-id');
    const totalPointsElement = document.getElementById('total-sprint-points');
    const tasksSection = document.getElementById('tasks-section');

    taskID.value = 'task-1';
    let totalPoints = 0;

    createTaskBtn.addEventListener('click', () => {
        const title = titleInput.value;
        const description = descriptionInput.value;
        const label = labelSelect.value;
        const points = pointsInput.value;
        const assignee = assigneeInput.value;

        console.log(title, description, label, points, assignee);

        if (title == '' || description == '' || points == '' || assignee == '') {
            return;
        }

        totalPoints += Number(points);
        totalPointsElement.innerHTML = `Total Points ${totalPoints}pts`;

        let icon = '';

        switch (label) {
            case 'Feature': icon = '&#8865;'; break;
            case 'Low Priority Bug': icon = '&#9737;'; break;
            case 'High Priority Bug': icon = '&#9888;'; break;
        }

        let labelClass = '';

        switch (label) {
            case 'Feature': labelClass = 'feature'; break;
            case 'Low Priority Bug': labelClass = 'low-priority'; break;
            case 'High Priority Bug': labelClass = 'high-priority'; break;
        }

        const taskArticle = document.createElement('article');
        taskArticle.setAttribute('id', `task-${taskID.value.split('-')[1]}`);
        taskID.value = `task-${Number(taskID.value.split('-')[1]) + 1}`;
        taskArticle.setAttribute('class', 'task-card');

        const labelDiv = document.createElement('div');
        labelDiv.setAttribute('class', `task-card-label ${labelClass}`);
        labelDiv.innerHTML = `${label} ${icon}`;

        const taskTitle = document.createElement('h3');
        taskTitle.setAttribute('class', 'task-card-title');
        taskTitle.textContent = title;

        const taskDescription = document.createElement('p');
        taskDescription.setAttribute('class', 'task-card-description');
        taskDescription.textContent = description;

        const taksPoints = document.createElement('div');
        taksPoints.setAttribute('class', 'task-card-points');
        taksPoints.textContent = `Estimated at ${points} pts`;

        const taskAssignee = document.createElement('div');
        taskAssignee.setAttribute('class', 'task-card-assignee');
        taskAssignee.textContent = `Assigned to: ${assignee}`;

        const cardActions = document.createElement('div');
        cardActions.setAttribute('class', 'task-card-actions');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => deleteBtnHandler(e, title, description, label, points, assignee));

        cardActions.appendChild(deleteBtn);
        taskArticle.appendChild(labelDiv);
        taskArticle.appendChild(taskTitle);
        taskArticle.appendChild(taskDescription);
        taskArticle.appendChild(taksPoints);
        taskArticle.appendChild(taskAssignee);
        taskArticle.appendChild(cardActions);

        tasksSection.appendChild(taskArticle);
        form.reset();
    });

    function deleteBtnHandler(e, title, description, label, points, assignee) {
        titleInput.value = title;
        descriptionInput.value = description;
        labelSelect.value = label;
        pointsInput.value = points;
        assigneeInput.value = assignee;
        titleInput.setAttribute('disabled', 'disabled');
        descriptionInput.setAttribute('disabled', 'disabled');
        labelSelect.setAttribute('disabled', 'disabled');
        pointsInput.setAttribute('disabled', 'disabled');
        assigneeInput.setAttribute('disabled', 'disabled');
        deleteTaskBtn.removeAttribute('disabled');
        createTaskBtn.setAttribute('disabled', 'disabled');
        
        const currentTask = e.target.parentNode.parentNode;

        deleteTaskBtn.addEventListener('click', () => deleteTask(currentTask));
    }

    function deleteTask(currentTask) {
        currentTask.remove();

        totalPoints -= Number(pointsInput.value);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;
        points = 0;
            
        form.reset();
        createTaskBtn.removeAttribute('disabled');
        deleteTaskBtn.setAttribute('disabled', 'disabled');
        titleInput.removeAttribute('disabled');
        descriptionInput.removeAttribute('disabled');
        labelSelect.removeAttribute('disabled');
        pointsInput.removeAttribute('disabled');
        assigneeInput.removeAttribute('disabled');
    }
}