function argInfo(...input) {
    let info = new Map();

    input.forEach(x => {
        let type = typeof x;

        if (!info.has(type)) {
            info.set(type, 0);
        }

        info.set(type, info.get(type) + 1);
        console.log(`${type}: ${x}`);
    });

    [...info].sort(([aType, aCount], [bType, bCount]) => bCount - aCount)
        .forEach(([type, count]) => {
            console.log(`${type} = ${count}`);
        });
}

argInfo({ name: 'bob' }, 3.333, 9.999);