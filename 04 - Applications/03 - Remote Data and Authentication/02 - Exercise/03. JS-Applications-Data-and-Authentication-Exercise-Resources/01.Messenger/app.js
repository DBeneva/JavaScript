function attachEvents() {
    document.getElementById('submit').addEventListener('click', postMessage);
    document.getElementById('refresh').addEventListener('click', getMessages);
}

attachEvents();

async function postMessage() {
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');

    if (author.value == '' || content.value == '') {
        return alert('All fields are required!');
    }

    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: author.value, content: content.value })
    });

    author.value = '';
    content.value = '';

    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message);
    }
}

async function getMessages() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();
    const messages = Object.values(data).map(o => `${o.author}: ${o.content}`).join('\n');
    
    document.getElementById('messages').value = messages;
}