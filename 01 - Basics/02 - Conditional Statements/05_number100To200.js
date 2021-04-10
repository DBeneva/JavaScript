function numbers(num) {
    num = Number(num);

    if (num < 100) {
        console.log('Less than 100');
    } else if (num <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}

function numbersTernary(num) {
    num = Number(num);

    let result = num < 100 ? 'Less than 100' :
        num <= 200 ? 'Between 100 and 200' :
            'Greater than 200';

    console.log(result);
}

numbers('342');

console.log('====================');

numbersTernary(142);