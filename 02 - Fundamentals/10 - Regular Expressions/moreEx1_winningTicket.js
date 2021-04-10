function winningTicket([input]) {
    let tickets = input.split(/ *, +/g);
    
    tickets.forEach(ticket => {
        if (ticket.length != 20) {
            console.log(`invalid ticket`);
        } else {
            let winning = /@{6,}|#{6,}|\${6,}|\^{6,}/;
            let leftMatch = ticket.slice(0, 10).match(winning);
            let rightMatch = ticket.slice(10, 20).match(winning);
            let outputLine = `ticket "${ticket}" - `;

            if (leftMatch && rightMatch && leftMatch[0][0] === rightMatch[0][0]) {
                if (leftMatch[0].length == rightMatch[0].length) {
                    outputLine += `${leftMatch[0].length}${leftMatch[0][0]}`;
                    outputLine += leftMatch[0].length == 10 ? ' Jackpot!' : '';
                } else {
                    outputLine += `${Math.min(leftMatch[0].length, rightMatch[0].length)}${leftMatch[0][0]}`;    
                }
            } else {
                outputLine += 'no match';
            }

            console.log(outputLine);
        }
    });
}

winningTicket([ '$$$$$$$$$$##########' ]);