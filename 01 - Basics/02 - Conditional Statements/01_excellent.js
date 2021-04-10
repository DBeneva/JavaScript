function excellent(grade) {
    if (Number(grade) >= 5.5) {
        console.log('Excellent!');
    }
}

function excellentTernary(grade) {
    console.log(Number(grade) >= 5.5 ? 'Excellent!' : '');
}

excellent('5.6');

console.log('====================');

excellentTernary('5.6');