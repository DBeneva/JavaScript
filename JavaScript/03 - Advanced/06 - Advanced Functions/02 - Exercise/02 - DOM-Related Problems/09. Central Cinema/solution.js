function solve() {
    let inputContainer = document.getElementById('container');
    let nameEl = inputContainer.querySelector('input[placeholder="Name"]');
    let hallEl = inputContainer.querySelector('input[placeholder="Hall"]')
    let priceEl = inputContainer.querySelector('input[placeholder="Ticket Price"]')
    let onScreenBtn = inputContainer.querySelector('button');
    let moviesUl = document.querySelector('#movies ul');
    let movieLis = moviesUl.getElementsByTagName('li');
    let archiveUl = document.querySelector('#archive ul');
    let clearBtn = document.querySelector('#archive button');

    onScreenBtn.addEventListener('click', addMovie);
    clearBtn.addEventListener('click', clear);

    function addMovie(ev) {
        ev.preventDefault();

        let name = nameEl.value;
        let hall = hallEl.value;
        let price = priceEl.value;

        if (name && hall && price != '' && !isNaN(price)) {
            let input = el('input');
            input.placeholder = 'Tickets Sold';

            let newEntry = el('li',
                el('span', name),
                el('strong', `Hall: ${hall}`),
                el('div', el('strong', Number(price).toFixed(2)), input, el('button', 'Archive')));

            let archiveBtn = newEntry.querySelector('button');
            archiveBtn.addEventListener('click', archive);
            moviesUl.appendChild(newEntry);
        }

        nameEl.value = '';
        hallEl.value = '';
        priceEl.value = '';
    }

    function archive(ev) {
        let movie = ev.target.parentNode.parentNode;
        console.log(movie);
        let tickets = movie.querySelector('div input').value;

        if (tickets != '' && !isNaN(tickets)) {
            let name = movie.querySelector('span').textContent;
            let price = Number(movie.querySelector('div strong').textContent);
            let deleteBtn = el('button', 'Delete');
            deleteBtn.addEventListener('click', deleteEntry);

            let newArchiveEntry = el('li',
                el('span', name),
                el('strong', `Total amount: ${(price * Number(tickets)).toFixed(2)}`),
                deleteBtn);

            archiveUl.appendChild(newArchiveEntry);
            removeMovie();

            function removeMovie() {
                for (let movie of movieLis) {
                    if (movie.querySelector('span').textContent == name) {
                        movie.remove();
                    }
                }
            }

        }
    }

    function deleteEntry(ev) {
        let archiveLi = ev.target.parentNode;
        archiveLi.remove();
    }

    function clear() {
        Array.from(archiveUl.querySelectorAll('li'))
            .forEach(li => li.remove());
    }

    function el(type, ...content) {
        let element = document.createElement(type);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                element.textContent = e;
            } else {
                element.appendChild(e);
            }
        });

        return element;
    }
}