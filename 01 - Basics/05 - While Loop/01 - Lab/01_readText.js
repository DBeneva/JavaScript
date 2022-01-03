function readText(input) {
    let i = 0, output = '';
    
    while (input[i] != 'Stop') {
        output += input[i] + '\n';
        i++;
    }

    console.log(output.trim());
}

function readTextArr(input) {
    console.log(
        input
            .slice(0, input.indexOf('Stop'))
            .join('\n')
    );
}

readText(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop']);
console.log('===================');
readTextArr(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop']);