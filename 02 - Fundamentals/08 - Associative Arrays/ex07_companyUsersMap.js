function companyUsers(input) {
    let companies = new Map();

    input.forEach(x => {
        let [name, employee] = x.split(' -> ');
        
        if (!companies.has(name)) {
            companies.set(name, new Set([]));
        }
        
        companies.get(name).add(employee);
    });

    [...companies].sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => console.log(`${x[0]}\n-- ${[...x[1]].join('\n-- ')}`));
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);