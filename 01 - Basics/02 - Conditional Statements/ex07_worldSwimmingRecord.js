function swimmingRecord([record, distance, secondsPerMeter]) {
    record = Number(record);
    distance = Number(distance);
    secondsPerMeter = Number(secondsPerMeter);

    const slowing = Math.floor(distance / 15) * 12.5;
    const ivansTime = secondsPerMeter * distance + slowing;

    if (ivansTime < record) {
        return `Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`;
    } else {
        return `No, he failed! He was ${(ivansTime - record).toFixed(2)} seconds slower.`;
    }
}

function swimmingRecordTern(input) {
    const [record, distance, secondsPerMeter] = input.map(Number);
    const slowing = Math.floor(distance / 15) * 12.5;
    const ivansTime = secondsPerMeter * distance + slowing;
    const result = ivansTime < record ?
        `Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.` :
        `No, he failed! He was ${(ivansTime - record).toFixed(2)} seconds slower.`;

    return result;
}

console.log(swimmingRecord([55555.67, 3017, 5.03]));

console.log('====================');

console.log(swimmingRecordTern([55555.67, 3017, 5.03]));