import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (drone, onDelete, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <div>
            <img id="details-img" src="${drone.imageUrl}" alt="example1" />
            <p id="details-model">${drone.model}</p>
        </div>
        <div id="info-wrapper">
            <div id="details-description">
              <p class="details-price">Price: €${drone.price}</p>
              <p class="details-condition">Condition: ${drone.condition}</p>
              <p class="details-weight">Weight: ${drone.weight}</p>
              <p class="drone-description">${drone.description}</p>
              <p class="phone-number">Phone: ${drone.phone}</p>
            </div>
            
            <!--Edit and Delete are only for creator-->
            ${isOwner
                ? html`
                    <div class="buttons">
                        <a href="${`/drones/edit/${drone._id}`}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                    </div>
                  `
                : ""
              }
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userId = api.getUserId();
    const drone = await api.getRecordById(id);

    ctx.render(detailsTemplate(drone, onDelete, drone._ownerId == userId));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this record?');

        if (confirmed) {
            await api.deleteRecord(drone._id);
            ctx.page.redirect('/dashboard');
        }
    }
}