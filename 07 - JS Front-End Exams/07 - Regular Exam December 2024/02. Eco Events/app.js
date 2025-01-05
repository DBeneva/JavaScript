window.addEventListener("load", solve);

function solve() {
    const emailInput = document.getElementById('email');
    const eventInput = document.getElementById('event');
    const locationInput = document.getElementById('location');
    const nextBtn = document.getElementById('next-btn');
    // const deleteBtn = document.getElementsByClassName('btn delete')[0];
    const previewList = document.getElementById('preview-list');
    const eventList = document.getElementById('event-list');

    nextBtn.addEventListener('click', nextHandler);
    // deleteBtn.addEventListener('click', deleteExpense);

    function nextHandler() {
        const email = emailInput.value;
        const event = eventInput.value;
        const location = locationInput.value;

        if (email === '' || event === '' || location === '') {
            return;
        }

        const editBtn = el('button',
            { class: 'action-btn edit', event: ['click', editEvent] },
            'edit'
        );
        
        const applyBtn = el('button',
            { class: 'action-btn apply', event: ['click', applyEvent] },
            'apply'
        );

        const li = el('li', { class: 'application' },
            el('article',
                el('h4', email),
                el('p',
                    el('strong', 'Event:'),
                    el('br'),
                    event
                ),
                el('p',
                    el('strong', 'Location:'),
                    el('br'),
                    location
                )
            ),
            editBtn,
            applyBtn
        );

        previewList.appendChild(li);

        emailInput.value = '';
        eventInput.value = '';
        locationInput.value = '';

        nextBtn.setAttribute('disabled', 'disabled');

        function editEvent() {
            emailInput.value = email;
            eventInput.value = event;
            locationInput.value = location;

            previewList.removeChild(li);
            nextBtn.removeAttribute('disabled');
        }

        function applyEvent() {
            li.removeChild(editBtn);
            li.removeChild(applyBtn);
            eventList.appendChild(li);
            nextBtn.setAttribute('disabled', 'disabled');
        }
    }

    // function deleteExpense() {
    //     location.reload();
    // }

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
}