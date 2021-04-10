function tickets(array, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let sorting = {
        destination() {
            return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        },
        price() {
            return tickets.sort((a, b) => a.price - b.price);
        },
        status() {
            return tickets.sort((a, b) => a.status.localeCompare(b.status));
        }
    };

    let tickets = [];

    array.forEach(line => {
        let [destination, price, status] = line.split('|');
        tickets.push(new Ticket(destination, price, status));
    });

    tickets = sorting[criterion]();

    return tickets;
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));