import { editMovieById } from '../api/data.js';

export function setupEdit(section, navigation) {
    const form = section.querySelector('form');

    return showEdit;

    async function showEdit(id) {
        const movie = await getMovieById(id);
        form.addEventListener('submit', (ev) => onSubmit(ev, movie._id));
    
        const title = form.querySelector('[name="title"]');
        const description = form.querySelector('[name="description"]');
        const image = form.querySelector('[name="imageUrl"]');
    
        title.value = movie.title;
        description.value = movie.description;
        image.value = movie.img;
    
        section.innerHTML = '';
        section.appendChild(form);
        
        return section;
    }

    async function onSubmit(ev, id) {
        ev.preventDefault();
    
        const title = form.querySelector('[name="title"]').value;
        const description = form.querySelector('[name="description"]').value;
        const img = form.querySelector('[name="imageUrl"]').value;
    
        const movie = { title, description, img };
        const editedMovie = await editMovieById(id, movie);
    
        main.innerHTML = '';
        section.innerHTML = '';
        navigation.goTo('details', editedMovie._id);
    }
}