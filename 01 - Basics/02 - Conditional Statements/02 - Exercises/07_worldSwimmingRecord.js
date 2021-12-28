function swimmingRecord([record, distance, secondsPerMeter]) {
    inputParamsToNumbers();

    const slowing = Math.floor(distance / 15) * 12.5;
    const ivansTime = secondsPerMeter * distance + slowing;
    const output = ivansTime < record
        ? `Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`
        : `No, he failed! He was ${(ivansTime - record).toFixed(2)} seconds slower.`;
    
    console.log(output);
    
    function inputParamsToNumbers() {
        record = Number(record);
        distance = Number(distance);
        secondsPerMeter = Number(secondsPerMeter);
    }
}

swimmingRecord([55555.67, 3017, 5.03]);