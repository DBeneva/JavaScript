import { showHome } from "./home.js";
import { register } from '../api/data.js';

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    } else if (password != repass) {
        return alert('Passwords don\'t match!');
    }

    await register(email, password);

    ev.target.reset();

    document.querySelector('nav .nav-link').textContent = `Welcome, ${email}`;
    [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
    [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');

    navigation.goTo('home');
}

export function setupRegister(section, navigation) {
    const form = section.querySelector('form');
    form.addEventListener('submit', (ev) => onSubmit(ev));

    return showRegister;

    async function showRegister() {
        return section;
    }
}