class Ticket {
    constructor(public destination: string, public price: number, public status: string) {
    }
}

function sortTickets(ticketDescriptions: string[], criteria: string) {
    const tickets = ticketDescriptions.map(t => {
        const [destination, price, status] = t.split('|');
        return new Ticket(destination, Number(price), status);
    });

    return tickets.sort((a, b) => a[criteria] - b[criteria]);
}