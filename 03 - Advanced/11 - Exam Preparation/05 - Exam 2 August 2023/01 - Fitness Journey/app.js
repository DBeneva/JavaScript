window.addEventListener('load', solve);

function solve() {
    const body = document.getElementById('body');
    const mainElement = document.getElementById('main');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactNumberInput = document.getElementById('contact-number');
    const classTypeInput = document.getElementById('class-type');
    const classTimeInput = document.getElementById('class-time');
    const nextBtn = document.getElementById('next-btn');
    const previewList = document.getElementsByClassName('class-info')[0];
    const confirmList = document.getElementsByClassName('confirm-class')[0];

    nextBtn.addEventListener('click', nextBtnHandler);

    function nextBtnHandler(e) {
        e.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const contactNumber = contactNumberInput.value;
        const classType = classTypeInput.value;
        const classTime = classTimeInput.value;

        if (name === '' || email === '' || contactNumber === '' || classType === '' || classTime === '') {
            return;
        }

        const editBtn = el('button',
            { class: 'edit-btn', event: ['click', editClass] },
            'Edit'
        );

        const continueBtn = el('button',
            { class: 'continue-btn', event: ['click', continueBtnHandler] },
            'Continue'
        );

        const classListItem = el('li',
            { class: 'info-item' },
            el('article',
                { class: 'personal-info' },
                el('p', name),
                el('p', email),
                el('p', contactNumber),
                el('p', classType),
                el('p', classTime),
            ),
            editBtn,
            continueBtn 
        );

        previewList.appendChild(classListItem);

        nameInput.value = '';
        emailInput.value = '';
        contactNumberInput.value = '';
        classTypeInput.value = '';
        classTimeInput.value = '';

        nextBtn.setAttribute('disabled', 'disabled');

        function editClass(e) {
            e.preventDefault();

            nameInput.value = name;
            emailInput.value = email;
            contactNumberInput.value = contactNumber;
            classTypeInput.value = classType;
            classTimeInput.value = classTime;

            previewList.removeChild(classListItem);
            nextBtn.removeAttribute('disabled');
        }

        function continueBtnHandler(e) {
            e.preventDefault();

            const cancelBtn = el('button',
                { class: 'cancel-btn', event: ['click', cancelBtnHandler] },
                'Cancel'
            );
            
            const confirmBtn = el('button',
                { class: 'confirm-btn', event: ['click', confirmBtnHandler] },
                'Confirm'
            );
            
            classListItem.removeChild(editBtn);
            classListItem.removeChild(continueBtn);
            classListItem.appendChild(cancelBtn);
            classListItem.appendChild(confirmBtn);

            confirmList.appendChild(classListItem);

            function cancelBtnHandler(e) {
                e.preventDefault();

                confirmList.removeChild(classListItem);
                nextBtn.removeAttribute('disabled');
            }

            function confirmBtnHandler(e) {
                e.preventDefault();

                const thankYouMessage = el('h1',
                    { id: 'thank-you' },
                    'Thank you for scheduling your appointment, we look forward to seeing you!',
                    el('button',
                        { id: 'done-btn', event: ['click', () => location.reload()] },
                        'Done'
                    )
                );

                body.removeChild(mainElement);
                body.appendChild(thankYouMessage);
            }
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
}