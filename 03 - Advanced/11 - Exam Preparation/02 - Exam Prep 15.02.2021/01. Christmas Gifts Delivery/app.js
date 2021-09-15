function solution() {
    const [gifts, sent, discarded] = document.querySelectorAll('ul');
    const input = document.querySelector('input');
    const addBtn = document.querySelector('button');

    addBtn.addEventListener('click', addGift);

    function addGift() {
        const name = input.value;
        input.value = '';

        let gift = el('li', name, { class: 'gift' },
            el('button', 'Send', { class: 'sendButton', event: ['click', () => dispatchGift(sent, name, gift)] }),
            el('button', 'Discard', { class: 'discardButton', event: ['click', () => dispatchGift(discarded, name, gift)] }));

        gifts.appendChild(gift);
        
        for (let li of Array.from(gifts.children)) {
            if (li.textContent > gift.textContent) {
                gifts.insertBefore(gift, li);
                break;
            }
        } 
    }

    function dispatchGift(target, name, gift,) {
        gift.remove();
        target.appendChild(el('li', name, { class: 'gift' }));
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