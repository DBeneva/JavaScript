function sortBy2Criteria(array) {
    console.log(array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'));
}

sortBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);