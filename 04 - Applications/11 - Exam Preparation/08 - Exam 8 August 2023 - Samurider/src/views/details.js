import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (motorcycle, onDelete, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${motorcycle.imageUrl}" alt="example1" />
      <p id="details-title">${motorcycle.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
            <p class="year">Year: ${motorcycle.year}</p>
            <p class="milage">Milage: ${motorcycle.milage} km.</p>
            <p class="contact">Contact Number: ${motorcycle.contact}</p>
            <p id = "motorcycle-description">${motorcycle.about}</p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${isOwner
            ? html`
            <div id="action-buttons">
                <a href=${`/motorcycles/${motorcycle._id}`} id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
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
    const motorcycle = await api.getPostById(id);
    const userId = api.getUserId();

    ctx.render(detailsTemplate(motorcycle, onDelete, motorcycle._ownerId == userId));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this motorcycle?');

        if (confirmed) {
            await api.deletePost(motorcycle._id);
            ctx.page.redirect('/dashboard');
        }
    }
}