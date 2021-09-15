import { login } from "../api/data.js";
import { showHome } from "./home.js";

export async function setupLogin(section, navigation) {
    const form = section.querySelector('form');
    form.addEventListener('submit', (ev) => onSubmit(ev));

    return showLogin;

    function showLogin() {
        return section;
    }

    async function onSubmit(ev) {
        ev.preventDefault();
            
        const formData = new FormData(ev.target);
        const email = formData.get('email');
        const password = formData.get('password');
    
        ev.target.reset();
        await login(email, password);
        
        document.querySelector('nav .nav-link').textContent = `Welcome, ${email}`;
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
    
        navigation.goTo('home');
    }
}