function solve() {
   const target = document.querySelector('main section');
   const [authorEl, titleEl, categoryEl] = document.querySelectorAll('form input');
   const contentEl = document.querySelector('form textarea');
   const createBtn = document.querySelector('form button');
   const archiveOl = document.querySelector('.archive-section ol');

   createBtn.addEventListener('click', createArticle);

   function createArticle(ev) {
      ev.preventDefault();

      let title = titleEl.value;
      let author = authorEl.value;
      let category = categoryEl.value;
      let content = contentEl.value;
      titleEl.value = '';
      authorEl.value = '';
      categoryEl.value = '';
      contentEl.value = '';


      let article = el('article',
         el('h1', title),
         el('p', 'Category: ', el('strong', category)),
         el('p', 'Creator: ', el('strong', author)),
         el('p', content),
         el('div', { class: 'buttons' },
            el('button', 'Delete', { class: 'btn delete', event: ['click', () => deleteArticle(article)] }),
            el('button', 'Archive', { class: 'btn archive', event: ['click', () => archiveArticle(title, article)] }))
      );

      target.appendChild(article);
   }

   function archiveArticle(title, article) {
      article.remove();
      let newLi = el('li', title);
      archiveOl.appendChild(newLi);

      for (let li of Array.from(archiveOl.querySelectorAll('li'))) {
         if (li.textContent.localeCompare(title) == 1) {
            archiveOl.insertBefore(newLi, li);
            break;
         }
      }
   }

   function deleteArticle(article) {
      article.remove();
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
