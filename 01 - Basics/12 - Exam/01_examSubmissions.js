function examSubmissions(students, tasks) {
    students = Number(students);
    tasks = Number(tasks);
    
    let submissionsPerStudent = Math.ceil(2.8 * tasks);
    submissionsPerStudent += Math.floor(tasks / 3);
    let submissionsTotal = submissionsPerStudent * students;
    let memoryNeeded = 5 * Math.ceil(submissionsTotal / 10);
    
    console.log(`${memoryNeeded} KB needed`);
    console.log(`${submissionsTotal} submissions`);
}

examSubmissions('11', '7');