function companyUsers(input) {
    let companies = {};

    input.forEach(x => {
        let [name, employee] = x.split(' -> ');
        
        if (!companies.hasOwnProperty(name)) {
            companies[name] = new Set([]);
        }
        
        companies[name].add(employee);
    });

    Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(x => console.log(`${x[0]}\n-- ${[...x[1]].join('\n-- ')}`));
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);