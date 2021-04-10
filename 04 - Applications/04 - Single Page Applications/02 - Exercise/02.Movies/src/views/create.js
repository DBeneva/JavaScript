//import { showDetails } from './details.js';
import { createMovie } from '../api/data.js';

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const movie = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl')
    };    

    if (movie.title == '' || movie.description == '' || movie.img == '') {
        return alert('All fields are required!');
    }

    const newMovie = await createMovie(movie);
    navigation.goTo('details', newMovie._id);
}

export function setupCreate(section, navigation) {
    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);

    return showCreate;

    async function showCreate() {
        return section;
    }
}