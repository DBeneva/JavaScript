function swimmingRecord([record, distance, secondsPerMeter]) {
    record = Number(record);
    distance = Number(distance);
    secondsPerMeter = Number(secondsPerMeter);

    let slowing = Math.floor(distance / 15) * 12.5;
    let ivansTime = secondsPerMeter * distance + slowing;

    if (ivansTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivansTime - record).toFixed(2)} seconds slower.`);
    }
}

function swimmingRecordTernary(input) {
    let [record, distance, secondsPerMeter] = input.map(Number);
    
    let slowing = Math.floor(distance / 15) * 12.5;
    let ivansTime = secondsPerMeter * distance + slowing;
    let result = ivansTime < record ?
        `Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.` :
        `No, he failed! He was ${(ivansTime - record).toFixed(2)} seconds slower.`;

    console.log(result);
}

swimmingRecord([55555.67, 3017, 5.03]);

console.log('====================');

swimmingRecordTernary([55555.67, 3017, 5.03]);