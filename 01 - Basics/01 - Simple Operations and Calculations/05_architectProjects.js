function getProjectInfo(name, projects) {
    const hoursNeeded = projects * 3;

    return `The architect ${name} will need ${hoursNeeded} hours to complete ${projects} project/s.`;
}

console.log(getProjectInfo('George', 4));