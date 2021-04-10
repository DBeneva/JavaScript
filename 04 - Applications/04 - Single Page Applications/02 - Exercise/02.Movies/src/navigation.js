import { getUserEmail } from './api/data.js';

export function createNavigation(main, nav) {
    const links = {};
    const views = {};

    setupNavigation();

    const navigation = {
        setUserNav,
        registerView,
        goTo
    };

    return navigation;

    async function goTo(name, ...params) {
        main.innerHTML = '';
        const section = await views[name](...params);
        main.appendChild(section);
    }

    function registerView(name, section, setup, navId) {
        const view = setup(section, navigation);
        views[name] = view;

        if (navId) {
            links[navId] = name;
        }
    }

    async function setupNavigation() {
        await setUserNav();

        nav.addEventListener('click', (ev) => {
            const viewName = links[ev.target.id];

            if (viewName) {
                ev.preventDefault();
                goTo(viewName);
            }
        });
    }

    async function setUserNav() {
        const email = await getUserEmail();

        if (email != null) {
            [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
            [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
            document.querySelector('nav .nav-link').textContent = `Welcome, ${email}`;
        } else {
            [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
            [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        }
    }

    // document.getElementById('createLink').addEventListener('click', (ev) => {
    //     ev.preventDefault();
    //     showCreate();
    // });

    // document.getElementById('logoutBtn').addEventListener('click', await logout);        

}