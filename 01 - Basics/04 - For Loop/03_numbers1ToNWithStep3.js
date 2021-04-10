function numbers1ToNWithStep3(num) {
    num = Number(num);

    for (let i = 1; i <= num; i += 3) {
        console.log(i);
    }
}

numbers1ToNWithStep3(7);