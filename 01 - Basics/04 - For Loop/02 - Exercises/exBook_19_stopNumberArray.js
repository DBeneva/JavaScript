function stopNumber(input) {
    const [n, m, stop] = input.map(Number);
    const end = Math.max(n, stop);
    
    console.log(Array
        .from(Array(m - end), (_, i) => i + 1 + end)
        .reverse()
        .filter(x => x % 2 == 0 && x % 3 == 0)
        .join(' ')
    );
}

stopNumber(['1', '36', '12']);