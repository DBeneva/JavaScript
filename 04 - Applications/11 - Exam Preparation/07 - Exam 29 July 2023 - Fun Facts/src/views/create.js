import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { createEvent } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add Event</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
            />
            <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
            />
            <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
            />
            <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
            ></textarea>
            <input
                type="text"
                name="date"
                id="date"
                placeholder="When?"
            />
            <button type="submit">Add</button>
        </form>
    </div>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const event = {
            name: formData.get('name'),
            imageUrl: formData.get('imageUrl'),
            category: formData.get('category'),
            description: formData.get('description'),
            date: formData.get('date'),
        };

        if (event.name == '' || event.imageUrl == '' || event.category == '' || event.description == '' || event.date == '') {
            return alert('Please fill in all mandatory fields!');
        }

        event.name = event.name.trim();
        event.imageUrl = event.imageUrl.trim();
        event.category = event.category.trim();
        event.description = event.description.trim();
        event.date = event.date.trim();
        event._ownerId = getUserId();

        console.log(event);

        await createEvent(event);
        ctx.page.redirect('/dashboard');
    }
}