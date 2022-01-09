function printClock() {
    const hours = Array.from(Array(24), (_, i) => i);
    const minutes = Array.from(Array(60), (_, i) => i);
    
    hours.forEach(h => {
        minutes.forEach(m => {
            console.log(
                `${h.toString().padStart(2, '0')}:` +
                `${m.toString().padStart(2, '0')}`
            );
        });
    });
}

printClock();