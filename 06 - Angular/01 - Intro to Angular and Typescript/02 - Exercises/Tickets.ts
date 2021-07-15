class Ticket {
    destination: string;
    price: number;
    status: string;
    constructor(destination: string, price: string, status: string) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}

function sortTickets(ticketDescriptions: string[], criteria: string) {
    const tickets = ticketDescriptions.map(t => {
        const [destination, price, status] = t.split('|');
        return new Ticket(destination, price, status);
    });

    return tickets.sort((a, b) => a[criteria] - b[criteria]);
}