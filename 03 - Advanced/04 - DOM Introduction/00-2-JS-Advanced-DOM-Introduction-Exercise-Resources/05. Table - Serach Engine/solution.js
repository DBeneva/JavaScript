function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const body = document.getElementsByTagName('tbody')[0];

   function onClick() {
       const searchText = document.getElementById('searchField').value;

       body.innerHtml = Array.from(body.children).map(row => {
           if (row.textContent.includes(searchText)) {
               row.setAttribute('class', 'select');
           } else {
               row.removeAttribute('class');
           }
       });

       document.getElementById('searchField').value = '';
   }
}