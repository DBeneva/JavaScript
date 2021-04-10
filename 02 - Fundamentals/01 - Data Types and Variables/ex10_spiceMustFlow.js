function spiceMustFlow(yield) {
    let days = 0;
    let spiceAmount = 0;

    while (yield >= 100) {
        spiceAmount += yield;
        spiceAmount -= 26;
        yield -= 10;
        days++;
    }

    if (spiceAmount >= 26) {
        spiceAmount -= 26;
    } else {
        spiceAmount = 0;
    }

    console.log(days);
    console.log(spiceAmount);
}

spiceMustFlow(111);