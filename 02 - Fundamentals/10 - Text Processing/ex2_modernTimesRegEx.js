function modernTimes(string) {
    console.log(string.match(/\#[A-za-z]+\b/g).map(x => x.slice(1)).join('\n'));
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');