function smallestOfThreeNumbers(num1, num2, num3) {
    let smallest = Number.MAX_SAFE_INTEGER;
    smallest = smaller(num1, smallest);
    smallest = smaller(num2, smallest);
    smallest = smaller(num3, smallest);

    console.log(smallest);

    function smaller(n, smaller) {
        return n < smaller ? n : smaller;
    }
}

smallestOfThreeNumbers(-25, 21, 4);