import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { getRecordById, editRecord } from '../api/data.js';

const editTemplate = (drone, onSubmit) => html`
<section id="edit">
        <div class="form form-item">
          <h2>Edit Offer</h2>
          <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="model" id="model" placeholder="Drone Model" value=${drone.model} />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value=${drone.imageUrl} />
            <input type="number" name="price" id="price" placeholder="Price" value=${drone.price} />
            <input type="number" name="weight" id="weight" placeholder="Weight" value=${drone.weight} />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" value=${drone.phone} />
            <select name="condition" id="condition" placeholder="Condition">
              <option disabled selected>Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
            <textarea name="description" id="description" placeholder="Description">${drone.description}</textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
    </section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const drone = await getRecordById(id);

  ctx.render(editTemplate(drone, onSubmit));


  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const editedDrone = {
      model: formData.get('model'),
      imageUrl: formData.get('imageUrl'),
      price: formData.get('price'),
      weight: formData.get('weight'),
      phone: formData.get('phone'),
      condition: formData.get('condition'),
      description: formData.get('description'),
      _id: drone._id
    };

    if (editedDrone.model == '' || editedDrone.imageUrl == '' || editedDrone.price == '' || editedDrone.weight == '' || editedDrone.phone == '' || editedDrone.condition == '' || editedDrone.description == '') {
        document.getElementById('errorBox').style.display = 'inline-block';
        // setTimeout(() => {
        //   document.getElementById('errorBox').style.display = 'none';
        // }, 3000);
    }

    editedDrone.model = editedDrone.model.trim();
    editedDrone.imageUrl = editedDrone.imageUrl.trim();
    editedDrone.price = editedDrone.price;
    editedDrone.weight = editedDrone.weight;
    editedDrone.phone = editedDrone.phone;
    editedDrone.condition = editedDrone.condition.trim();
    editedDrone.description = editedDrone.description.trim();
    editedDrone._ownerId = getUserId();

    await editRecord(id, editedDrone);
    ctx.page.redirect(`/drones/${id}`);
  }
}