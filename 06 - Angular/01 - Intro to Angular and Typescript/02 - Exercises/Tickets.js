"use strict";
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
function sortTickets(ticketDescriptions, criteria) {
    const tickets = ticketDescriptions.map(t => {
        const [destination, price, status] = t.split('|');
        return new Ticket(destination, Number(price), status);
    });
    return tickets.sort((a, b) => a[criteria] - b[criteria]);
}
