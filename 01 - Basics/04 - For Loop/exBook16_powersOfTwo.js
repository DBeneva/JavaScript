function powersOfTwo(num) {
    num = Number(num);

    for (let i = 0; i <= num; i++) {
        console.log(Math.pow(2, i));
    }
}

powersOfTwo(2);