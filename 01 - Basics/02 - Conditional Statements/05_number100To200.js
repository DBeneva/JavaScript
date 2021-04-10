function getRange(num) {
    num = Number(num);

    if (num < 100) {
        return 'Less than 100';
    } else if (num <= 200) {
        return 'Between 100 and 200';
    } else {
        return 'Greater than 200';
    }
}

function getRangeTern(num) {
    num = Number(num);

    return num < 100 ? 'Less than 100' :
        num <= 200 ? 'Between 100 and 200' :
            'Greater than 200';
}

console.log(getRange('342'));

console.log('====================');

console.log(getRangeTern(142));