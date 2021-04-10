function extractIncreasingSubsequence(array) {
    return array.filter((x, i, a) => {
        return x >= a.slice(0, i).reduce((acc, curr) => Math.max(acc, curr), 0);
    });
}

extractIncreasingSubsequence([1, 
    3,
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );
console.log('-----');
extractIncreasingSubsequence([1, 
    2, 
    3,
    4]
    );
console.log('-----');
extractIncreasingSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );
