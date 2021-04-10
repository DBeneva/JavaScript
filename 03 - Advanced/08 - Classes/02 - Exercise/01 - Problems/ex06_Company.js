class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            let employee = {
                username,
                salary: Number(salary),
                position,
                department
            };

            if (this.departments.filter(dep => dep.name == department).length == 0) {
                let newDepartment = {
                    name: department,
                    employees: [employee],
                    salaryTotal: Number(salary),
                    average() {
                        return this.salaryTotal / this.employees.length;
                    }
                }

                this.departments.push(newDepartment);
            } else {
                for (let dep of this.departments) {
                    if (dep.name == department) {
                        dep.employees.push(employee);
                        dep.salaryTotal += Number(salary);
                    }
                }
            }
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDep = this.departments
            .sort((a, b) => b.average() - a.average())
            .shift();

        let result = `Best Department is: ${bestDep.name}\n`;
        result += `Average salary: ${bestDep.average().toFixed(2)}\n`;

        let employees = bestDep.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .map(emp => `${emp.username} ${emp.salary} ${emp.position}`)
            .join('\n');
        
        result += employees;

        return result;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.departments);
console.log(c.bestDepartment());
// let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR";