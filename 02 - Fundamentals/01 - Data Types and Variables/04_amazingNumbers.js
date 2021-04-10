function amazingNumbers(num) {
    let sumOfDigits = 0;
    num = num.toString();
    
    for (let i = 0; i < num.length; i++) {
        sumOfDigits += Number(num[i]);
    }

    let output = sumOfDigits.toString().includes('9');
    
    console.log(output == true ? `${num} Amazing? True` : `${num} Amazing? False`);
}

amazingNumbers(583472);