import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (character, onDelete, onLike, isOwner, userHasNotLiked) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${character.imageUrl}" alt="example1" />
      <div>
        <p id="details-category">${character.category}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${character.description}</p>
               <p id ="more-info">${character.moreInfo}</p>
          </div>
        </div>
        <h3>Is This Useful:<span id="likes">${character.likes}</span></h3>

        <!--Edit and Delete are only for creator-->
        ${isOwner
            ? html`
            <div id="action-buttons">
                <a href=${`/characters/${character._id}`} id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>
            `
            : userHasNotLiked
                ? html`
                <div id="action-buttons">
                    <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>
                </div>
                `
                : ''
        }          
      </div>
    </div>
</section>    
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userId = api.getUserId();
    const character = await api.getPostById(id);
    character.likes = await api.getLikes(id);
    const userLikes = await api.getUserLikes(id, userId);
    const userHasNotLiked = userId ? userLikes == 0 : false;

    ctx.render(detailsTemplate(character, onDelete, onLike, character._ownerId == userId, userHasNotLiked));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this character?');

        if (confirmed) {
            await api.deletePost(character._id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onLike() {
        await api.like(character._id);
        ctx.page.redirect(`/details/${character._id}`);
    }
}