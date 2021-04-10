function signCheck(numOne, numTwo, numThree) {

    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        return 'Positive';
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        return 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        return 'Negative';
    } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
        return 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree < 0) {
        return 'Positive';
    } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
        return 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
        return 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        return 'Negative';
    } else if (numOne == 0 || numTwo == 0 || numThree == 0) {
        return 'Positive';
    }
}

console.log(signCheck(5, 12, -15));