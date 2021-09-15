async function lockedProfile() {
    const main = document.getElementById('main');
    const profiles = await getProfiles();
    
    main.innerHTML = '';
    profiles.forEach(p => createCard(p));
    main.addEventListener('click', (ev) => showOrHide(ev));


    async function getProfiles() {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        const profiles = await response.json();

        return Object.values(profiles);
    }

    function createCard(profile) {
        const card = e('div', { className: 'profile' },
            e('img', { src: './iconProfile2.png', className: 'userIcon' }),
            e('label', {}, 'Lock'),
            e('input', { type: 'radio', name: 'user1Locked', value: 'lock', checked: true }),
            e('label', {}, 'Unlock'),
            e('input', { type: 'radio', name: 'user1Locked', value: 'unlock' }),
            e('br', {}),
            e('hr', {}),
            e('label', {}, 'Username'),
            e('input', { type: 'text', name: 'user1locked', value: profile.username, disabled: true, readonly: true }),
            e('div', { id: 'user1HiddenFields' },
                e('hr', {}),
                e('label', {}, 'Email:'),
                e('input', { type: 'email', name: 'user1Email', value: profile.email, disabled: true, readonly: true }),
                e('label', {}, 'Age:'),
                e('input', { type: 'email', name: 'user1Age', value: profile.age, disabled: true, readonly: true })
            ),
            e('button', {}, 'Show more')
        );

        main.appendChild(card);
    }

    function showOrHide(ev) {
        const unlocked = ev.target.parentNode.querySelector('[value="lock"]').checked != true;

        if (ev.target.tagName == 'BUTTON' && unlocked) {
            const hidden = ev.target.parentNode.querySelector('div > div');
            hidden.style.display = hidden.style.display == 'block' ? 'none' : 'block';
            ev.target.textContent = ev.target.textContent == 'Show more' ? 'Hide it' : 'Show more';
        }
    }

    function e(type, attributes, ...content) {
        let element = document.createElement(type);
    
        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.slice(0, 2) == 'on') {
                element.addEventListener(attr.slice(2).toLocaleLowerCase(), value);
            } else {
                element[attr] = value;
            }
        }
    
        content = content.reduce((a, c) => a.concat(c), []);
    
        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                element.appendChild(node);
            } else {
                element.appendChild(e);
            } 
        });
    
        return element;
    }
}