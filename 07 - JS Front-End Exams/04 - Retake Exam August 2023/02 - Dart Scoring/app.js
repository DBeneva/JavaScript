window.addEventListener("load", solve);

function solve() {
    const playerInput = document.getElementById('player');
    const scoreInput = document.getElementById('score');
    const roundInput = document.getElementById('round');
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementsByClassName('btn clear')[0];
    const sureList = document.getElementById('sure-list');
    const scoreboardList = document.getElementById('scoreboard-list');

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const player = playerInput.value;
      const score = scoreInput.value;
      const round = roundInput.value;

      if (player === '' || score === '' || round === '') {
        return;
      }

      const editBtn = el('button', { class: 'btn edit', event: ['click', editItem] }, 'edit');
      const confirmBtn = el('button', { class: 'btn ok', event: ['click', confirmItem] }, 'ok');

      const dartItem = el('li',
        { class: 'dart-item' },
        el('article',
          el('p', player),
          el('p', `Score: ${score}`),
          el('p', `Round: ${round}`),
        ),
        editBtn,
        confirmBtn
      );

      sureList.appendChild(dartItem);
      playerInput.value = '';
      scoreInput.value = '';
      roundInput.value = '';
      addBtn.setAttribute('disabled', 'disabled');

      function editItem() {
        playerInput.value = player;
        scoreInput.value = score;
        roundInput.value = round;
        addBtn.removeAttribute('disabled');

        sureList.removeChild(dartItem);
      }

      function confirmItem() {
        dartItem.removeChild(editBtn);
        dartItem.removeChild(confirmBtn);
        sureList.removeChild(dartItem);
        scoreboardList.appendChild(dartItem);

        addBtn.removeAttribute('disabled');
      }
    });

    clearBtn.addEventListener('click', () => location.reload());

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
  