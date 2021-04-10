function nationalCourt(input) {
    let people = Number(input.pop());
    let efficiency = input.map(Number).reduce((a, b) => a + b, 0);
    let hours = 0;
    
    while (people > 0) {
        hours++;
        
        if (hours % 4 != 0) {
            people -= efficiency;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

nationalCourt(['1', '1', '1', '20']);