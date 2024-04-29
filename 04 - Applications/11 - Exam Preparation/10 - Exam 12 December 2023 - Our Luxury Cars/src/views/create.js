import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { createRecord } from '../api/data.js';

const createTemplate = (onSubmit) => html`
    <section id="create">
      <div class="form form-auto">
        <h2>Share Your Car</h2>
        <form class="create-form" @submit=${onSubmit}>
          <input type="text" name="model" id="model" placeholder="Model" />
          <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" />
          <input type="text" name="price" id="price" placeholder="Price in Euro" />
          <input type="number" name="weight" id="weight" placeholder="Weight in Kg" />
          <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" />
          <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50"></textarea>
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

        const car = {
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            price: formData.get('price'),
            weight: formData.get('weight'),
            speed: formData.get('speed'),
            about: formData.get('about')
        };

        if (car.model == '' || car.imageUrl == '' || car.price == '' || car.weight == '' || car.speed == '' || car.about == '') {
          return alert('Please fill in all mandatory fields!');
        }

        car.model = car.model.trim();
        car.imageUrl = car.imageUrl.trim();
        car.price = car.price;
        car.weight = car.weight;
        car.speed = car.speed;
        car.about = car.about.trim();
        car._ownerId = getUserId();

        console.log(car);

        await createRecord(car);
        ctx.page.redirect('/dashboard');
    }
}