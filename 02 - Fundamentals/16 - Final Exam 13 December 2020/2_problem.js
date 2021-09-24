function problem(input) {
    let num = Number(input.shift());
    input = input.slice(0, num);
    let validPassword = /(.+)>(?<nums>\d{3})\|(?<sLetters>[a-z]{3})\|(?<cLetters>[A-Z]{3})\|(?<symbols>[^><]{3})<\1/;

    input.forEach(password => {
        if (!password.match(validPassword)) {
            console.log('Try another password!');
        } else {
            let match = password.match(validPassword).groups;
            console.log(`Password: ${match.nums}${match.sLetters}${match.cLetters}${match.symbols}`);
        }
    });
}

problem([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
  ]);

console.log('-----------');

problem([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ]);