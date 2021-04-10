function solve() {
    let modules = document.querySelector('.modules');
    document.querySelector('button').addEventListener('click', validate);

    function validate(ev) {
        ev.preventDefault();

        let name = document.querySelector('input[name="lecture-name"]').value;
        let date = document.querySelector('input[name="lecture-date"]').value;
        let module = document.querySelectorAll('option:checked')[0].textContent;

        if (name != '' && date != '' && module != 'Select module...') {
            let dateObj = new Date(date);
            let year = dateObj.getFullYear();
            let month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
            let day = (dateObj.getDate()).toString().padStart(2, '0');
            let hours = (dateObj.getHours()).toString().padStart(2, '0');
            let minutes = (dateObj.getMinutes()).toString().padStart(2, '0');
            let dateFormatted = `${year}/${month}/${day} - ${hours}:${minutes}`;
            let moduleFormatted = `${module.toLocaleUpperCase()}-MODULE`;

            let liEl = el('li',
                el('h4', `${name} - ${dateFormatted}`),
                el('button', 'Del', { class: 'red', event: ['click', removeLecture] }),
                { class: 'flex' });

            let moduleDivs = modules.querySelectorAll('div');
            let existingModule = false;

            for (let div of moduleDivs) {
                if (div.querySelector('h3').textContent == moduleFormatted) {
                    let ulEl = div.querySelector('ul');
                    let liEls = ulEl.querySelectorAll('li');
                    ulEl.appendChild(liEl);

                    for (let li of liEls) {
                        let dateCurrent = li.querySelector('h4').textContent.split(' - ').slice(1);

                        if (dateFormatted < dateCurrent) {
                            ulEl.insertBefore(liEl, li);
                            break;
                        }
                    }

                    existingModule = true;
                }
            }

            if (existingModule == false) {
                modules.appendChild(el('div',
                    el('h3', moduleFormatted),
                    el('ul', liEl),
                    { class: 'module' }));
            }
        }
    }

    function removeLecture(ev) {
        let liToBeRemoved = ev.target.parentNode;
        let div = liToBeRemoved.parentNode.parentNode;
        liToBeRemoved.remove();

        if (div.querySelectorAll('ul li').length == 0) {
            div.remove();
        }
    }

    function el(type, ...content) {
        let element = document.createElement(type);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                let node = document.createTextNode(e);
                element.appendChild(node);
            } else if (e instanceof HTMLElement) {
                element.appendChild(e);
            } else if (typeof e == 'object') {
                Object.entries(e).forEach(([name, value]) => {
                    if (name == 'event') {
                        element.addEventListener(...value);
                    } else {
                        element.setAttribute(name, value);
                    }
                });
            }
        });

        return element;
    }
};