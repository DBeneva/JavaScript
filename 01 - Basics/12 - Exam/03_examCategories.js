function examCategories(...input) {
    let difficulty = Number(input[0]);
    let complexity = Number(input[1]);
    let pages = Number(input[2]);
    let category = '';

    if (difficulty >= 80 && complexity >= 80 && pages >= 8) {
        category = 'Legacy';
    } else if (difficulty >= 80 && complexity <= 10) {
        category = 'Master';
    } else if (difficulty <= 10) {
        category = 'Elementary';
    } else if (difficulty <= 30 && pages <= 1) {
        category = 'Easy';
    } else if (complexity >= 50 && pages >= 2) {
        category = 'Hard';
    } else {
        category = 'Regular';
    }

    console.log(category);
}

examCategories('80', '40', '3');