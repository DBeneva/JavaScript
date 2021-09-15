class Bank {
    constructor(name) {
        this._name = name;
        this.allCustomers = [];
    }

    get name() {
        return this._name;
    }

    newCustomer(customer) {
        if (this.allCustomers.find(c => c.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        Object.defineProperty(customer, 'totalMoney', { value: 0, enumerable: false, writable: true });
        Object.defineProperty(customer, 'transactions', { value: [], enumerable: false, writable: true });
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId == personalId); 
        
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        customer.totalMoney += amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId == personalId); 

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(c => c.personalId == personalId); 

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        let info = [`Bank name: ${this.name}`];
        info.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        info.push(`Customer ID: ${customer.personalId}`);
        info.push(`Total Money: ${customer.totalMoney}$`);
        info.push('Transactions:');
        info.push(customer.transactions
            .map((t, i) => `${i + 1}. ${t}`)
            .reverse()
            .join('\n'));

        return info.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 });
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 }));