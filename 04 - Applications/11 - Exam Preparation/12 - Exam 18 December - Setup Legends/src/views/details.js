import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (setup, onDelete, onLike, isOwner, isUser, userHasNotLiked) => html`
    <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${setup.imageUrl}" alt="example1" />
          <div>
            <p id="details-setup-name">${setup.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="setup-description">${setup.description}</p>
                <p id="details-parts">${setup.parts}</p>
              </div>
            </div>
            <h3>Setup Likes:<span id="like">${setup.likes}</span></h3>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${isOwner
                ? html`
                    <a href="${`/setups/edit/${setup._id}`}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                  `
                : isUser && userHasNotLiked
                    ? html`<a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>`
                    : ""
              }
            </div>
          </div>
        </div>
    </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userId = api.getUserId();
    const setup = await api.getRecordById(id);
    setup.likes = await api.getTotalLikes(id);
    const userHasNotLiked = await api.getLikesForUser(id, userId) === 0;

    ctx.render(detailsTemplate(setup, onDelete, onLike, setup._ownerId == userId, Boolean(userId), userHasNotLiked));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this record?');

        if (confirmed) {
            await api.deleteRecord(setup._id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onLike() {
        await api.likeRecord(setup._id);
        ctx.page.redirect(`/setups/${setup._id}`);
    }
}