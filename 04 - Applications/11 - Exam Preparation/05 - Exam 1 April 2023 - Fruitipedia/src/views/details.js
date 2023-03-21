import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (fruit, onDelete, isOwner) => html`
    <section id="details">
          <div id="details-wrapper">
              <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
              <p id="details-title">${fruit.name}</p>
              <div id="info-wrapper">
                  <div id="details-description">
                      <p>${fruit.description}</p>
                      <p id="nutrition">Nutrition</p>
                      <p id = "details-nutrition">${fruit.nutrition}</p>
                  </div>
                  ${isOwner
                      ? html`
                          <div id="action-buttons">
                              <a href=${`/data/fruits/${fruit._id}`} id="edit-btn">Edit</a>
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
    const item = await api.getFruitById(id);
    const userId = api.getUserId();

    ctx.render(detailsTemplate(item, onDelete, item._ownerId == userId));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await api.deleteFruit(item._id);
            ctx.page.redirect('/dashboard');
        }
    }
}