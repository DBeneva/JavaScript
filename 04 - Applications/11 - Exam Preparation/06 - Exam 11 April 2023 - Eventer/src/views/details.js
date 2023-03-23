import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (event, onDelete, isOwner, goToEvent, userId) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${event.imageUrl}" alt="example1" />
            <p id="details-title">${event.name}</p>
            <p id="details-category">Category: <span id="categories">${event.category}</span></p>
            <p id="details-date">Date: <span id="date">${event.date}</span></p>
            <div id="info-wrapper">
                <div id="details-description">
                    <span>${event.description}</span>
                </div>        
            </div>
        
            <h3>Going: <span id="go">${event.peopleGoing}</span> times.</h3>
        
            <div id="action-buttons">
                ${isOwner
                    ? html`
                        <a href=${`/events/${event._id}`} id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                      `
                    : !event.isUserGoing && userId
                        ? html`<a @click=${goToEvent} href="javascript:void(0)" id="go-btn">Going</a>`
                        : ''
                }
            </div>
        </div>
    </section> 
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const event = await api.getEventById(id);
    const userId = api.getUserId();

    event.peopleGoing = await api.getPeopleGoingToEvent(id);
    event.isUserGoing = await api.isUserGoingToEvent(id, userId);

    ctx.render(detailsTemplate(event, onDelete, event._ownerId == userId, goToEvent, userId));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this event?');

        if (confirmed) {
            await api.deleteEvent(event._id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function goToEvent() {
        await api.goToEvent({ eventId: id });
        ctx.page.redirect(`/details/${id}`);
    }
}