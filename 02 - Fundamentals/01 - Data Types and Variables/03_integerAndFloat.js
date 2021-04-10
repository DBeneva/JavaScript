function integerAndFloat(n1, n2, n3) {
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);

    let sum = n1 + n2 + n3;
    let output = sum % 1 == 0 ? `${sum} - Integer` : `${sum} - Float`;
    
    console.log(output);
}

integerAndFloat(9, 100, 1.1);