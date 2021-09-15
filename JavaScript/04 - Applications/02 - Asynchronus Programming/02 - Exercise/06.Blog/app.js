async function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', createOptions);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function createOptions() {
    const select = document.getElementById('posts');
    const posts = await getPosts();

    Object.values(posts).map(p => e('option', { value: p.id }, p.title)).forEach(o => select.appendChild(o));
}

async function getPosts() {
    const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const posts = await response.json();

    return posts;
}

async function displayPost() {
    const postId = document.getElementById('posts').value;
    const postComments = document.getElementById('post-comments');
    
    const posts = await getPosts();
    const comments = await getCommentsByPostId(postId);
    
    document.getElementById('post-title').textContent = posts[postId].title;
    document.getElementById('post-body').textContent = posts[postId].body;

    postComments.innerHTML = '';

    comments.forEach(c => postComments.appendChild(e('li', {}, c.text)));
}

async function getCommentsByPostId(postId) {
    const response = await fetch('http://localhost:3030/jsonstore/blog/comments');
    const comments = await response.json();
    
    return Object.values(comments).filter(c => c.postId == postId);
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