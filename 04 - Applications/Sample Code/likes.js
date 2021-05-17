import { e } from '../dom.js';
import { showHome } from '../home.js';
import * as data from '../api/data.js';
import { showRegister } from './register.js';

async function createMovieCard(movie, likes, ownLikes, goTo) {
    const userId = sessionStorage.getItem('userId');

    let element = e('div', { className: 'container' },
        e('div', { className: 'row bg-light text-dark' },
            e('h1', {}, `Movie title: ${movie.title}`),
            e('div', { className: 'col-md-8' },
                e('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })
            ),
            e('div', { className: 'col-md-4 text-center' },
                e('h3', { className: 'my-3 ' }, 'Movie Description'),
                e('p', {}, movie.description)
            )
        )
    );

    const controls = element.querySelector('div.col-md-4.text-center');

    if (userId != null) {
        if (userId == movie._ownerId) {
            const deleteBtn = e('a', { className: 'btn btn-danger', href: '#', onClick: async () => deleteMovie(movie._id) }, 'Delete');
            const editBtn = e('a', { className: 'btn btn-warning', href: '#', onClick: async () => goTo('edit', movie._id) }, 'Edit');

            controls.appendChild(deleteBtn);
            controls.appendChild(editBtn);
        } else if (ownLikes.length == 0) {
            const likeBtn = e('a', { className: 'btn btn-primary', href: '#', onClick: async (ev) => likeMovie(ev, movie._id, likes) }, 'Like');
            controls.appendChild(likeBtn);
        }
    }

    const likesSpan = e('span', { className: 'enrolled-span', textContent: likes + ' like' + (likes == 1 ? '' : 's') });
    controls.appendChild(likesSpan);

    return element;
}

async function deleteMovie(id) {
    const confirmed = confirm('Are you sure you want to delete this movie?');

    if (confirmed) {
        await data.deleteMovieById(id);
        alert('Movie deleted!');
        showHome();
    }
}

async function likeMovie(ev, id, likes) {
    ev.preventDefault();

    await data.likeMovieById(id);
    likes++;
    const likesSpan = ev.target.parentNode.querySelector('span');
    likesSpan.textContent = likes + ' like' + (likes == 1 ? '' : 's');
    ev.target.remove();
}

export function setupDetails(section, navigation) {
    return showDetails;

    async function showDetails(id) {
        const [movie, likes, ownLikes] = await Promise.all([
            data.getMovieById(id),
            data.getLikesByMovieId(id),
            data.getOwnLikesByMovieId(id)
        ]);
    
        const card = await createMovieCard(movie, likes, ownLikes, navigation.goTo);
        section.appendChild(card);

        return section;
    }
}