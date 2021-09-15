function bricks(input) {
    let bricks = Number(input[0]);
    let workers = Number(input[1]);
    let bricksPerCart = Number(input[2]);
    let bricksPerCourse = bricksPerCart * workers;
    let courses = Math.ceil(bricks / bricksPerCourse);
    
    console.log(courses);
}

bricks(['120', '2', '30']);