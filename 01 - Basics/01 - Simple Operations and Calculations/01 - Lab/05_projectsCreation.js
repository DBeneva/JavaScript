function printProjectInfo([name, projects]) {
    const hoursNeeded = projects * 3;

    console.log(
        `The architect ${name} will need ${hoursNeeded} hours ` +
        `to complete ${projects} project/s.`
    );
}

printProjectInfo(['George', 4]);
printProjectInfo(['George', '4']);