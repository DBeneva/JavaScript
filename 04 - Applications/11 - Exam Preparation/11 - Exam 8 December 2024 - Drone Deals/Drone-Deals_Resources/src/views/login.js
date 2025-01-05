import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit) => html`
    <section id="login">
        <div class="form" @submit=${onSubmit}>
          <h2>Login</h2>
          <form class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
    </section>
`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            document.getElementById('errorBox').style.display = 'block';
            return;
            // setTimeout(() => {
            //     document.getElementById('errorBox').style.display = 'none';
            // }, 3000);
        }

        await login(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}