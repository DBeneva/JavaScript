function readText(input) {
    let i = 1;
    let text = input[i];
    
    while (text != 'Stop') {
        i++;
        text = input[i];
    }

    console.log(i);
}

readText(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop']);