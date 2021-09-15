function addItem() {
    const input = document.getElementById('newText');
    const liElement = createElement('li', input.value);
    const ul = document.getElementById('items');
    ul.appendChild(liElement);
    const deleteBtn = createElement('a', '[Delete]');
    liElement.appendChild(deleteBtn);
    deleteBtn.href = '#';
    
    ul.addEventListener('click', (ev) => {
        if (ev.target.tagName == 'A') {
            ev.target.parentNode.remove();
        }
    });

    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}