import { setupHome } from './views/home.js';
import { setupDetails } from './views/details.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';
import { setupCreate } from './views/create.js';
import { setupEdit } from './views/edit.js';
import { logout as apiLogout } from './api/data.js';
import { createNavigation } from './navigation.js';

window.addEventListener('load', async () => {
    setUserNav();

    const main = document.querySelector('main');
    const nav = document.querySelector('nav');

    const navigation = createNavigation(main, nav);

    navigation.registerView('home', document.getElementById('home-page'), setupHome, 'homeLink');
    navigation.registerView('details', document.getElementById('movie-details'), setupDetails);
    navigation.registerView('login', document.getElementById('form-login'), setupLogin, 'loginLink');
    navigation.registerView('register', document.getElementById('form-sign-up'), setupRegister, 'registerLink');
    navigation.registerView('create', document.getElementById('add-movie'), setupCreate, 'createLink');
    navigation.registerView('edit', document.getElementById('edit-movie'), setupEdit);
    
    document.getElementById('logoutBtn').addEventListener('click', logout);


    document.getElementById('views').remove();
    navigation.goTo('home-page');
});

async function logout() {
    await apiLogout();
    navigation.setUserNav();
    navigation.goTo('home-page');
}