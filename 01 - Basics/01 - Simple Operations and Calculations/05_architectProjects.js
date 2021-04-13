function getProjectInfo(name, projects) {
    const hoursNeeded = projects * 3;

    return `The architect ${name} will need ${hoursNeeded} hours to complete ${projects} project/s.`;
}

function getProjectInfoObj(name, projects) {
    const architect = {
        name,
        projects,
        get hoursNeeded() {
            return projects * 3;
        },
        get outputLine() {
            return `The architect ${name} will need ${this.hoursNeeded} hours to complete ${projects} project/s.`;
        } 
    };

    return architect.outputLine;
}

console.log(getProjectInfo('George', 4));

console.log('====================');

console.log(getProjectInfoObj('George', 4));