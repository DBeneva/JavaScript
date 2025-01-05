import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit) => html`
    <section id="register">
        <div class="form" @submit=${onSubmit}>
          <h2>Register</h2>
          <form class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
    </section>
`;

export async function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('re-password');

    if (email == '' || password == '' || repass == '') {
        document.getElementById('errorBox').style.display = 'inline-block';
        return;
        // setTimeout(() => {
        //   document.getElementById('errorBox').style.display = 'none';
        // }, 3000);
    }

    if (password != repass) {
        document.getElementById('errorBox').style.display = 'inline-block';
        document.querySelector('#errorBox span').textContent = 'Passwords don\'t match';
        return;
        // setTimeout(() => {
        //   document.getElementById('errorBox').style.display = 'none';
        // }, 3000);
    }

    await register(email, password);

    ctx.setUserNav();
    ctx.page.redirect('/');
  }
}