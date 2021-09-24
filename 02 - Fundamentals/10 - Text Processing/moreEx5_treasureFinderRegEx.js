function treasureFinder(input) {
    input = input.slice(0, input.indexOf('find'));
    let key = input.shift().split(' ').map(Number);

    input.forEach(string => {
        let treasure = '';

        for (let char of string) {
            treasure += String.fromCharCode(char.charCodeAt() - key[0]);
            key.push(key.shift());
        }

        if (string.length % key.length != 0) {
            for (let i = 0; i < string.length % key.length; i++) {
                key.unshift(key.pop());
            }
        }

        let type = treasure.match(/(?<=&).+(?=&)/);
        let coordinates = treasure.match(/(?<=\<).+(?=\>)/);
        console.log(`Found ${type} at ${coordinates}`);
    });
}

treasureFinder([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'
  ]
  );