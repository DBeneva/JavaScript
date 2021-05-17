import { e } from '../dom.js';
import { getMovieCount, getMovies } from '../api/data.js';

function createMoviePreview(movie, goTo) {
    const element = e('div', { className: 'card mb-4' },
        e('img', { className: 'card-img-top', src: movie.img, alt: 'Card image cap', width: 400 }),
        e('div', { className: 'card-body' },
            e('h4', { className: 'card-title' }, movie.title)
        ),
        e('div', { className: 'card-footer' },
            e('button', { id: movie._id, type: 'button', className: 'btn btn-info movieDetailsLink', textContent: 'Details' })
        )
    );

    return element;
}

function createPager(page, pages, goTo) {
    const result = e('header', { className: 'section-title' }, `Page ${page} of ${pages}`);

    if (page > 1) {
        result.appendChild(e('a', { className: 'pager', href: '/home', onClick: (ev) => changePage(ev, page - 1)}, '< Prev'));
    }
    if (page < pages) {
        result.appendChild(e('a', { className: 'pager', href: '/home', onClick: (ev) => changePage(ev, page + 1)}, 'Next >'));
    }

    return result;

    function changePage(ev, newPage) {
        ev.preventDefault();
        goTo('home', newPage);
    }
}

export function setupHome(section, navigation) {
    const container = section.querySelector('.card-deck.d-flex.justify-content-center');
    
    container.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('movieDetailsLink')) {
            ev.preventDefault();
            goTo('details', ev.target.id);
        }
    });
    
    return showHome;

    async function showHome(page = 1) {
        container.innerHTML = 'Loading&hellip;';
    
        const movies = await getMovies();
        const movieCount = await getMovieCount();
        const pages = Math.ceil(movieCount / 5);
        const cards = movies.map(m => createMoviePreview(m, navigation.goTo));
    
        const fragment = document.createDocumentFragment();

        fragment.appendChild(createPager(page, pages, navigation.goTo));
        cards.forEach(c => fragment.appendChild(c));
        fragment.appendChild(createPager(page, pages, navigation.goTo));
    
        container.innerHTML = '';
        container.appendChild(fragment);

        return container;
    }
}