import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (fact, onDelete, isOwner, likeFact, userId) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${fact.imageUrl}" alt="example1" />
      <p id="details-category">${fact.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${fact.description}</p>
          <p id ="more-info">${fact.moreInfo}</p>
        </div>

        <h3>Likes:<span id="likes">${fact.peopleLiked}</span></h3>

         <!--Edit and Delete are only for creator-->
         
    <div id="action-buttons">
    ${isOwner
        ? html`
            <a href=${`/facts/${fact._id}`} id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          `
        : !fact.hasUserLiked && userId
            ? html`<a @click=${likeFact} href="javascript:void(0)" id="like-btn">Like</a>`
            : ''
    }
    </div>
      </div>
  </div>
</section>   
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const fact = await api.getFactById(id);
    const userId = api.getUserId();

    fact.peopleLiked = await api.getPeopleLikedFact(id);
    fact.hasUserLiked = await api.hasUserLikedFact(id, userId);

    ctx.render(detailsTemplate(fact, onDelete, fact._ownerId == userId, likeFact, userId));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this fun fact?');

        if (confirmed) {
            await api.deleteFact(fact._id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function likeFact() {
        await api.likeFact({ factId: id });
        ctx.page.redirect(`/details/${id}`);
    }
}

{/* <section id="details">
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
    </section>  */}