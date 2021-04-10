function architectProjects(name, projects) {
    let hoursNeeded = projects * 3;
    let outputLine = `The architect ${name} will need ${hoursNeeded} hours to complete ${projects} project/s.`;
    
    console.log(outputLine);
}

architectProjects('George', 4);