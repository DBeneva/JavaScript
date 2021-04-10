function colorize() {
    const rows = document.querySelectorAll('table tr:nth-child(even)');
    
    [...rows].forEach(x => {
        x.style.backgroundColor = 'teal';
    });
}