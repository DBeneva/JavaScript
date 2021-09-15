class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity == 0) {
            throw new Error('Not enough parking space.');
        } else {
            let car = {
                carModel,
                carNumber,
                payed: false
            };

            this.vehicles.push(car);
            this.capacity--;

            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(v => v.carNumber == carNumber);

        if (car == undefined) {
            throw new Error('The car, you\'re looking for, is not found.');
        } else if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.vehicles.splice(this.vehicles.indexOf(car), 1);
            this.capacity++;

            return `${carNumber} left the parking lot.`;
        }
    }

    pay(carNumber) {
        let car = this.vehicles.filter(v => v.carNumber == carNumber)[0];

        if (car == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else if (car.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        } else {
            car.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }
    }

    getStatistics(carNumber) {
        if (carNumber == undefined) {
            return [
                `The Parking Lot has ${this.capacity} empty spots left.`,
                this.vehicles
                    .sort((a, b) => a.carModel.localeCompare(b.carModel))
                    .map(car => `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`)
                    .join('\n')
            ].join('\n');
        } else {
            let car = this.vehicles.find(v => v.carNumber == carNumber);
            return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));