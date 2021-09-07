function winningTicket(input) {
    console.log(input
        .split(/ *, +/g)
        .map(t => {
            const pattern = t.slice(0, 10).match(new RegExp(/\${6,}|@{6,}|#{6,}\^{6,}/)) ?
                t.slice(0, 10).match(new RegExp(/\${6,}|@{6,}|#{6,}\^{6,}/))[0] : null;

            return t.length == 20 ?
                t.slice(10).match(pattern) ?
                    `ticket "${t}" - ${pattern.length}${pattern[0]}${pattern.length == 10 ? ' Jackpot!' : ''}` :
                    `ticket "${t}" - no match` :
                'invalid ticket';
        })
        .join('\n'));
}

winningTicket('Cash$@$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey');
winningTicket('validticketnomatch:(');
