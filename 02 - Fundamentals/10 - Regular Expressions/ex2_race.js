function race(input) {
    let participants = {};
    input.shift().split(', ').map(name => {
        participants[name] = 0;
    });

    input.forEach(line => {
        let name = line.match(/[A-Za-z]/g).join('');
        if (participants.hasOwnProperty(name)) {
            let distance = line.match(/\d/g).map(Number).reduce((a, b) => a + b);
            participants[name] += distance;
        }
    });

    let topThree = Object.keys(participants)
        .sort((a, b) => participants[b] - participants[a])
        .slice(0, 3);
    console.log(`1st place: ${topThree[0]}`);
    console.log(`2nd place: ${topThree[1]}`);
    console.log(`3rd place: ${topThree[2]}`);
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]);