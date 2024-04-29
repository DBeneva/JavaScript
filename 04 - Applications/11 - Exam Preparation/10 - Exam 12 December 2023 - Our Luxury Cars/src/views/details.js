import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (car, onDelete, isOwner) => html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src="${car.imageUrl}" alt="example1" />
        <p id="details-title">${car.model}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="price">Price: €${car.price}</p>
            <p class="weight">Weight: ${car.weight} kg</p>
            <p class="top-speed">Top Speed: ${car.speed} kph</p>
            <p id="car-description">
              ${car.about}
            </p>
          </div>
          <!--Edit and Delete are only for creator-->
          ${isOwner
            ? html`
              <div id="action-buttons">
                <a href=${`/cars/edit/${car._id}`} id="edit-btn">Edit</a>
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
    const car = await api.getRecordById(id);

    ctx.render(detailsTemplate(car, onDelete, car._ownerId == userId));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this car?');

        if (confirmed) {
            await api.deleteRecord(car._id);
            ctx.page.redirect('/dashboard');
        }
    }
}