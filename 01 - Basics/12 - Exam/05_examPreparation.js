function examPreparation(students, tasks, trainerEnergy) {
    students = Number(students);
    tasks = Number(tasks);
    trainerEnergy = Number(trainerEnergy);
    
    let tasksSolved = 0;
    let questions = 0;
    let studentsFew = false;

    while (trainerEnergy > 0) {
        trainerEnergy += tasks * 2;
        tasksSolved += tasks;
        students -= tasks;
        trainerEnergy -= students * 6;
        questions += students * 2;
    
        if (students < 10) {
            studentsFew = true;
            break;
        }
    
        students += Math.floor(students / 10);
    }
    
    if (studentsFew) {
        console.log(`The students are too few!`);
        console.log(`Problems solved: ${tasksSolved}`);
    } else {
        console.log(`The trainer is too tired!`);
        console.log(`Questions asked: ${questions}`);
    }
}

examPreparation('20', '5', '500');