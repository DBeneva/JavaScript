function sprintReview(input) {
    const numberOfTasks = input.shift();
    const initialBoard = input.slice(0, numberOfTasks);
    const asignees = Array.from(new Set(initialBoard.map(x => x.split(':')[0])));
    const commands = input.slice(numberOfTasks);
    const sprintBoard = {};

    asignees.map(a => {
        sprintBoard[a] = initialBoard
            .filter(x => x.split(':')[0] == a)
            .map(t => {
                const taskArray = t.split(':').slice(1);
                return {
                    id: taskArray[0],
                    title: taskArray[1],
                    status: taskArray[2],
                    points: taskArray[3]
                };
            });
    });

    for (let i = 0; i < commands.length; i++) {
        const c = commands[i];

        const commandArray = c.split(':');
        const command = commandArray[0];
        const assignee = commandArray[1];
        const id = commandArray[2];
        const title = commandArray[3];
        const status = commandArray[4];
        const points = commandArray[5];

        switch (command) {
            case 'Add New':
                sprintBoard[assignee]
                    ? sprintBoard[assignee].push({ id, title, status, points })
                    : console.log(`Assignee ${assignee} does not exist on the board!`);                    
                break;
            case 'Change Status':
                sprintBoard[assignee]
                    ? sprintBoard[assignee].filter(t => t.id == id).length > 0
                        ? sprintBoard[assignee].filter(t => t.id == id)[0].status = title
                        : console.log(`Task with ID ${id} does not exist for ${assignee}!`)
                    : console.log(`Assignee ${assignee} does not exist on the board!`);                    
                break;
            case 'Remove Task':
                sprintBoard[assignee]
                    ? sprintBoard[assignee][Number(id)]
                        ? sprintBoard[assignee].splice(id, 1)
                        : console.log(`Index is out of range!`)
                    : console.log(`Assignee ${assignee} does not exist on the board!`);                    
                break;
        }
    }

    function getPoints(status) {
        return Object.values(sprintBoard)
            .map(t => t.filter(x => x.status == status))
            .filter(x => x.length > 0)
            .map(t => t.map(x => Number(x.points))
            .reduce((a, c) => a + c, 0)).reduce((a, c) => a + c, 0);
    }
    
    
    const toDoTasksTotalPoints = getPoints('ToDo');
    const inProgressTasksTotalPoints = getPoints('In Progress');
    const codeReviewTasksTotalPoints = getPoints('Code Review');
    const doneTasksTotalPoints = getPoints('Done');
    
    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    console.log(`Done Points: ${doneTasksTotalPoints}pts`);

    doneTasksTotalPoints >= toDoTasksTotalPoints + inProgressTasksTotalPoints + codeReviewTasksTotalPoints
        ? console.log('Sprint was successful!')
        : console.log('Sprint was unsuccessful...');
}

sprintReview([5,
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:Done:5',
    'Add New:Kiril:BOP-1218:Add Info Page:Done:5',
    'Add New:Kiril:BOP-1219:Add Info Page:Done:5',
    'Add New:Kiril:BOP-1220:Add Info Page:Done:5',
    'Add New:Kiril:BOP-1221:Add Info Page:Done:5']

);