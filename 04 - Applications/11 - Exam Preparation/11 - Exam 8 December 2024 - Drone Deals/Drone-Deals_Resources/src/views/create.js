import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { createRecord } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create">
        <div class="form form-item">
          <h2>Add Drone Offer</h2>
          <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="model" id="model" placeholder="Drone Model" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="number" name="price" id="price" placeholder="Price" />
            <input type="number" name="weight" id="weight" placeholder="Weight" />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
            <select name="condition" id="condition" placeholder="Condition">
              <option value="" disabled selected>Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
            <textarea name="description" id="description" placeholder="Description"></textarea>
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

        const drone = {
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            price: formData.get('price'),
            weight: formData.get('weight'),
            phone: formData.get('phone'),
            condition: formData.get('condition'),
            description: formData.get('description')
        };

        if (drone.model == '' || drone.imageUrl == '' || drone.price == '' || drone.weight == '' || drone.phone == '' || drone.condition == '' || drone.description == '') {
            document.getElementById('errorBox').style.display = 'inline-block';
            // setTimeout(() => {
            //   document.getElementById('errorBox').style.display = 'none';
            // }, 3000);
        }

        drone.model = drone.model.trim();
        drone.imageUrl = drone.imageUrl.trim();
        drone.price = drone.price;
        drone.weight = drone.weight;
        drone.phone = drone.phone;
        drone.condition = drone.condition.trim();
        drone.description = drone.description.trim();
        drone._ownerId = getUserId();

        console.log(drone);

        await createRecord(drone);
        ctx.page.redirect('/dashboard');
    }
}