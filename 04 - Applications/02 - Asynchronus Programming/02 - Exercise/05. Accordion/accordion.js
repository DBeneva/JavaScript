async function solution() {
    const main = document.getElementById('main');
    const articles = await getTitles();
    articles.forEach(t => createArticle(t));
    
    async function getTitles() {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        const titles = await response.json();

        return titles;
    }

    async function createArticle(article) {
        const content = await getContent(article);
        
        const articleDiv = e('div', { className: 'accordion' },
            e('div', { className: 'head' },
                e('span', {}, article.title),
                e('button', { className: 'button', id: article._id, textContent: 'More', onClick: (ev) => toggleArticle(ev) })
            ),
            e('div', { className: 'extra' },
                e('p', {}, content)
            )
        );

        main.appendChild(articleDiv);
    }

    async function getContent(article) {
        const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`);
        const result = await response.json();
        
        return result.content;
    }

    function toggleArticle(ev) {
        const extra = ev.target.parentNode.parentNode.querySelector('.extra');
        
        extra.style.display = extra.style.display != 'block' ? 'block' : 'none';
        ev.target.textContent = ev.target.textContent == 'More' ? 'Less' : 'More';
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