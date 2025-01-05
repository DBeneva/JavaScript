class ParkingLot {
    constructor(totalSpaces, hourlyRate) {
        this.totalSpaces = totalSpaces;
        this.hourlyRate = hourlyRate;
        this.availableSpaces = totalSpaces;
    }
    
    parkedVehicles = [];
    revenue = 0;

    parkVehicle(licensePlate) {
        if (this.availableSpaces > 0) {
            if (this.parkedVehicles.includes(licensePlate)) {
                return `Vehicle with license plate ${licensePlate} is already parked.`;
            } else {
                this.availableSpaces--;
                this.parkedVehicles.push(licensePlate);
                return `Vehicle with license plate ${licensePlate} parked successfully.`;
            }
        } else {
            return "The parking lot is full. No available spaces.";
        }
    }

    unparkVehicle(licensePlate, hoursParked) {
        if (!this.parkedVehicles.includes(licensePlate)) {
            return `No vehicle found with license plate ${licensePlate}.`;
        } else {
            const parkingFee = hoursParked * this.hourlyRate;
            this.revenue += parkingFee;
            this.availableSpaces++;
            this.parkedVehicles = this.parkedVehicles.filter(v => v !== licensePlate);

            return `Vehicle with license plate ${licensePlate} has been unparked. Parking fee: $${parkingFee}. Duration: ${hoursParked} hours.`;
        }
    }

    showAvailableSpaces() {
        return `Available parking spaces: ${this.availableSpaces} out of ${this.totalSpaces}.`;
    }

    listParkedVehicles() {
        if (this.parkedVehicles.length > 0) {
            let outputLine = 'Currently parked vehicles:\n';
            outputLine += this.parkedVehicles.map(v => `A vehicle with registration number ${v} is in the parking lot.`).join('\n');

            return outputLine;
        } else {
            return 'No vehicles currently parked.';
        }
    }

    getTotalRevenue() {
        return `Total revenue earned from parking fees: $${this.revenue.toFixed(2)}`;
    }
}

let parking = new ParkingLot(3, 5);

console.log(parking.parkVehicle("XYZ789"));
console.log(parking.unparkVehicle("XYZ789", 24));
console.log(parking.getTotalRevenue());
console.log(parking.showAvailableSpaces());
console.log(parking.listParkedVehicles());