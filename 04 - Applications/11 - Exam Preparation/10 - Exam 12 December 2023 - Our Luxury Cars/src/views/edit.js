import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { getRecordById, editRecord } from '../api/data.js';

const editTemplate = (car, onSubmit) => html`
    <section id="edit">
      <div class="form form-auto">
        <h2>Edit Your Car</h2>
        <form class="edit-form" @submit=${onSubmit}>
          <input type="text" name="model" id="model" placeholder="Model" value=${car.model} />
          <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" value=${car.imageUrl} />
          <input type="text" name="price" id="price" placeholder="Price in Euro" value=${car.price} />
          <input type="number" name="weight" id="weight" placeholder="Weight in Kg" value=${car.weight} />
          <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" value=${car.speed} />
          <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50">${car.about}</textarea>
          <button type="submit">Edit</button>
        </form>
      </div>
    </section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const car = await getRecordById(id);

  ctx.render(editTemplate(car, onSubmit));


  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const editedCar = {
      model: formData.get('model'),
      imageUrl: formData.get('imageUrl'),
      price: formData.get('price'),
      weight: formData.get('weight'),
      speed: formData.get('speed'),
      about: formData.get('about'),
      _id: car._id
    };

    if (editedCar.model == '' || editedCar.imageUrl == '' || editedCar.price == '' || editedCar.weight == '' || editedCar.speed == '' || editedCar.about == '') {
      return alert('Please fill in all mandatory fields!');
    }

    editedCar.model = editedCar.model.trim();
    editedCar.imageUrl = editedCar.imageUrl.trim();
    editedCar.price = editedCar.price;
    editedCar.weight = editedCar.weight;
    editedCar.speed = editedCar.speed;
    editedCar.about = editedCar.about.trim();
    editedCar._ownerId = getUserId();

    await editRecord(id, editedCar);
    ctx.page.redirect(`/cars/${id}`);
  }
}