import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { homePage } from './views/home.js';
import { dashboardPage } from './views/dashboard.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { createPage } from './views/create.js';
import { searchPage } from './views/search.js';

import * as api from './api/data.js';

window.api = api;
const main = document.querySelector('#main-element');
setUserNav();

document.getElementById('logout-btn').addEventListener('click', async () => {
    await api.logout();
    page.redirect('/');
});

page('/', decorateContext, homePage);
page('/dashboard', decorateContext, dashboardPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/drones/:id', decorateContext, detailsPage);
page('/drones/edit/:id', decorateContext, editPage);
page('/create', decorateContext, createPage);
// page('/search', decorateContext, searchPage);

// window.alert = function() {};
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = api.getUserId();

    if (userId) {
        document.getElementsByClassName('user')[0].style.display = 'inline-block';
        document.getElementsByClassName('guest')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('guest')[0].style.display = 'inline-block';
        document.getElementsByClassName('user')[0].style.display = 'none';
    }
}