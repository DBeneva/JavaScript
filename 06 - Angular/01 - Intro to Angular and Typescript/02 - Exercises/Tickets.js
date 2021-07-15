"use strict";
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}
function sortTickets(ticketDescriptions, criteria) {
    const tickets = ticketDescriptions.map(t => {
        const [destination, price, status] = t.split('|');
        return new Ticket(destination, price, status);
    });
    return tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
}
