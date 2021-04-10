function sortNumbers(n1, n2, n3) {
    let array = [];
    array.push(Number(n1));
    array.push(Number(n2));
    array.push(Number(n3));
    let arraySorted = array.sort((a, b) => b - a);

    console.log(arraySorted[0]);
    console.log(arraySorted[1]);
    console.log(arraySorted[2]);
}

sortNumbers(0, -8, -2);