import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { getEventById, editEvent } from '../api/data.js';

const editTemplate = (event, onSubmit) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Event</h2>
            <form class="edit-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Event"
                    .value=${event.name}
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="event-image"
                    placeholder="Event Image"
                    .value=${event.imageUrl}
                />
                <input
                    type="text"
                    name="category"
                    id="event-category"
                    placeholder="Category"
                    .value=${event.category}
                />  
                <textarea
                    id="event-description"
                    name="description"
                    placeholder="Description"
                    rows="5"
                    cols="50"
                >${event.description}</textarea>
              
                <label for="date-and-time">Event Time:</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="When?"
                    .value=${event.date}
                />

                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const event = await getEventById(id);

    ctx.render(editTemplate(event, onSubmit));


    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const editedEvent = {
            name: formData.get('name'),
            imageUrl: formData.get('imageUrl'),
            category: formData.get('category'),
            description: formData.get('description'),
            date: formData.get('date')
        };

        if (editedEvent.name == '' || editedEvent.imageUrl == '' || editedEvent.category == '' || editedEvent.description == '' || editedEvent.date == '') {
            return alert('Please fill in all mandatory fields!');
        }

        editedEvent.name = editedEvent.name.trim();
        editedEvent.imageUrl = editedEvent.imageUrl.trim();
        editedEvent.category = editedEvent.category.trim();
        editedEvent.description = editedEvent.description.trim();
        editedEvent.date = editedEvent.date.trim();
        editedEvent._ownerId = getUserId();
        
        await editEvent(id, editedEvent);
        ctx.page.redirect(`/details/${id}`);
    }
}
       