function examRetention(students, seasonsTotal) {
    students = Number(students);
    seasonsTotal = Number(seasonsTotal);

    for (let season = 1; season <= seasonsTotal; season++) {
        for (let exam = 1; exam <= 2; exam++) {
            students = Math.ceil(students * 0.90);
        }
        
        students = Math.ceil(students * 0.80);
        
        if (season % 3 == 0) {
            students += Math.ceil(students * 0.15);
        } else {
            students += Math.ceil(students * 0.05);
        }
    }

    console.log(`Students: ${students}`);
}

examRetention('2000', '5');