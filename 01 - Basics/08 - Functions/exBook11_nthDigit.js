function nthDigit(input) {
    let num = input[0];
    let digit = Number(input[1]);
    
    console.log(findNthDigit(num, digit));

    function findNthDigit(number, positionRightToLeft) {
        return number[number.length - positionRightToLeft];
    }
}

nthDigit(['2435', '4']);