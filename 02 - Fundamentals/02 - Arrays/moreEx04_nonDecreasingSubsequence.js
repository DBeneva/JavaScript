function nonDecreasingSubsequence(input) {
    let outputLine = '';
    let maxNumber = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= maxNumber) {
            outputLine += input[i] + ' ';
            maxNumber = input[i];
        }
    }

    console.log(outputLine);
}

nonDecreasingSubsequence([ 1, 2, 3, 4]);