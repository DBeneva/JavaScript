function convertUnits([num, from, to]) {
    num = Number(num);

    const units = {
        mm: {
            cm: num / 10,
            m: num / 1000
        },
        cm: {
            mm: num * 10,
            m: num / 100
        },
        m: {
            mm: num * 1000,
            cm: num * 100
        }
    };

    console.log(units[from][to].toFixed(3));
}

convertUnits([12, 'mm', 'm']);