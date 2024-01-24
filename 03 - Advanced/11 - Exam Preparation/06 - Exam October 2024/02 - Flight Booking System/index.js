class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const existingFlight = this.flights.find(f => f.flightNumber == flightNumber);

        if (existingFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push({ flightNumber, destination, departureTime, price});
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }

    bookFlight(passengerName, flightNumber) {
        const existingFlight = this.flights.find(f => f.flightNumber === flightNumber);

        if (!existingFlight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookings.push({ passengerName, flightNumber });
            this.bookingsCount++;

            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        const existingBooking = this.bookings.find(b => b.passengerName === passengerName && b.flightNumber === flightNumber);

        if (!existingBooking) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            this.bookings.splice(this.bookings.indexOf(existingBooking), 1);
            this.bookingsCount--;

            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`);
        } else if (criteria === 'all') {
            const title = `All bookings(${this.bookingsCount}):`;
            const allBookings = this.bookings.map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`);
            allBookings.unshift(title);

            return allBookings.join('\n');
        } else if (criteria === 'cheap') {
            const title = `Cheap bookings:`;
            const cheapFlights = this.flights.filter(f => Number(f.price) <= 100).map(f => f.flightNumber);
            const cheapBookings = this.bookings.filter(b => cheapFlights.includes(b.flightNumber));

            if (cheapBookings.length > 0) {
                const result = cheapBookings.map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`);
                result.unshift(title);
    
                return result.join('\n');
            } else {
                return `No cheap bookings found.`;
            }
        } else if (criteria === 'expensive') {
            const title = `Expensive bookings:`;
            const expensiveFlights = this.flights.filter(f => Number(f.price) > 100).map(f => f.flightNumber);
            const expensiveBookings = this.bookings.filter(b => expensiveFlights.includes(b.flightNumber));
            
            if (expensiveBookings.length > 0) {
                const result = expensiveBookings.map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`);
                result.unshift(title);
    
                return result.join('\n');
            } else {
                return `No expensive bookings found.`;
            }
        }
    }
}

let myManager = new FlightBookingSystem("TravelWorld");
console.log(myManager.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(myManager.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(myManager.bookFlight("Alice", "AA101"));
console.log(myManager.bookFlight("Bob", "BB202"));
console.log(myManager.showBookings("cheap"));

