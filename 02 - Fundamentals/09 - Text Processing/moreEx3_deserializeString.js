function deserializeString(input) {
    input = input.slice(0, input.indexOf('End'));
    let string = [];

    input.forEach(x => {
        let [char, indexes] = x.split(':');
        indexes = indexes.split('/')
            .map(Number)
            .forEach(i => {
                string[i] = char;
            });
    });

    console.log(string.join(''));
}

deserializeString([ 'a:0/2/4/6', 'b:1/3/5', 'end' ]);