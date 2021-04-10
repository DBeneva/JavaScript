function rageQuit([input]) {
    let strings = input.match(/[^\d]+/g);
    let numbers = input.match(/\d+/g).map(Number);
    let message = '';

    for (let i = 0; i < strings.length; i++) {
        message += strings[i].toUpperCase().repeat(numbers[i]);
    }

    console.log(`Unique symbols used: ${[...new Set(message)].length}`);
    console.log(message);
}

rageQuit([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
]

);