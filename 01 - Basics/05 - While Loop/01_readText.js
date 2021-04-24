function readText(input) {
    let i = 1;
    let text = input[i];
    
    while (text != 'Stop') {
        i++;
        text = input[i];
    }

    return i;
}

function readTextArr(input) {
    return input.indexOf('Stop');
}

console.log(readText(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop']));

console.log('===================');

console.log(readText(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop']));