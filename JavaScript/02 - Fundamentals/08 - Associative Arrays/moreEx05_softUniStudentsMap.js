function softUniStudents(input) {
    let courses = new Map();
    let coursesCapacity = new Map();

    input.forEach(x => {
        if (x.includes(':')) {
            let [courseName, capacity] = x.split(': ');
            capacity = Number(capacity);

            if (coursesCapacity.has(courseName)) {
                coursesCapacity.set(courseName, coursesCapacity.get(courseName) + capacity);
            } else {
                coursesCapacity.set(courseName, capacity);
                courses.set(courseName, []);
            }
        } else if (x.includes('joins')) {
            let [usernameCredits, email, courseName] = x.replace('with email', 'joins').split(' joins ');
            let [username, credits] = usernameCredits.split('[');
            credits = Number(credits.slice(0, credits.length - 1));

            if (coursesCapacity.has(courseName) &&
                coursesCapacity.get(courseName) > 0) {
                let student = new Map([['username', username], ['credits', credits], ['email', email]]);
                courses.get(courseName).push(student);
                coursesCapacity.set(courseName, coursesCapacity.get(courseName) - 1);
            }
        }
    });

    [...courses]
        .sort((a, b) => b[1].length - a[1].length)
        .map(course => {
            console.log(`${course[0]}: ${coursesCapacity.get(course[0])} places left`);

            course[1]
                .sort((a, b) => b.get('credits') - a.get('credits'))
                .forEach(student => {
                    console.log(`--- ${student.get('credits')}: ${student.get('username')}, ${student.get('email')}`);
                });
        });
}

softUniStudents([
    'JavaBasics: 2',
    //'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    //'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);