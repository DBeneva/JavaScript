function subSum(array, start, end) {
    if (Array.isArray(array) == false) return NaN;

    start = start < 0 ? 0 : start;
    end = end >= array.length ? end = array.length - 1 : end;

    return array
        .slice(start, end + 1)
        .reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(subSum('text', 0, 2));