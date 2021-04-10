function fibonacci(endPosition) {
    endPosition = Number(endPosition);
    let oldNum1 = 0;
    let oldNum2 = 1;

    for (let position = 0; position <= endPosition; position++) {
        let num = oldNum1 + oldNum2;
        oldNum2 = oldNum1;
        oldNum1 = num;
    }

    console.log(oldNum1);
}

fibonacci(20);