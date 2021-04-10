function solve() {
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  const tableBody = document.querySelector('tbody');

  const furniture = [];

  generateBtn.addEventListener('click', () => {
      const furnitureArray = JSON.parse(input.value);
      
      furnitureArray.forEach(obj => {
          const item = createRow(obj);
          furniture.push(item);
          tableBody.appendChild(item.row);
      });
  });

  buyBtn.addEventListener('click', () => {
      let result = {
          boughtItems: [],
          totalPrice: 0,
          decFactor: 0
      };

      furniture.filter(x => x.isChecked())
          .forEach(item => {
              result.boughtItems.push(item.getValues().name);
              result.totalPrice += Number(item.getValues().price);
              result.decFactor += Number(item.getValues().decFactor);
          });

      output.textContent = `Bought furniture: ${result.boughtItems.join(', ')}\n`;
      output.textContent += `Total price: ${result.totalPrice.toFixed(2)}\n`;
      output.textContent += `Average decoration factor: ${result.decFactor / result.boughtItems.length}`;
  });

  const td = createElement.bind(null, 'td');

  function createRow(obj) {
      const img = createElement('img');
      img.src = obj.img;

      const check = createElement('input');
      check.type = 'checkbox';

      const row = createElement('tr',
          td(img),
          td(createElement('p', obj.name)),
          td(createElement('p', obj.price)),
          td(createElement('p', obj.decFactor)),
          td(check));

      return {
          row,
          isChecked,
          getValues
      };

      function isChecked() {
          return check.checked;
      }

      function getValues() {
          return obj;
      }
  }

  function createElement(type, ...content) {
      const result = document.createElement(type);

      content.forEach(e => {
          if (typeof e == 'string' || typeof e == 'number') {
              const node = document.createTextNode(e);
              result.appendChild(node);
          } else if (typeof e == 'function') {
              result.appendChild(e());
          } else {
              result.appendChild(e);
          }
      });

      return result;
  }
}