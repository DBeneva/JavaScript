function solve() {
    let buttons = document.querySelectorAll('button');
    let checkBtn = buttons[0];
    let clearBtn = buttons[1];

    checkBtn.addEventListener('click', checkOnClick);
    clearBtn.addEventListener('click', clearOnClick);

    function checkOnClick(ev) {
        let tableMatrix = Array.from(document.querySelectorAll('tbody tr'))
            .map(row => Array.from(row.querySelectorAll('td input')).map(x => Number(x.value)));
        let max = tableMatrix.length;
        let tableTranspose = tableMatrix[0].map((_, i) => tableMatrix.map(x => x[i]));
        let isSolved = true;

        checkRow(tableMatrix);
        checkRow(tableTranspose);

        function checkRow(matrix) {
            matrix.forEach(row => {
                if (row.length != max || row.join('') != [...new Set(row)].join('')) {
                    document.querySelector('table').style.border = '2px solid red';
                    let output = 'NOP! You are not done yet...';
                    let outputParagraph = document.querySelector('#check p');
                    outputParagraph.style.color = 'red';
                    outputParagraph.textContent = output;
                    isSolved = false;
                }
            });
        }

        if (isSolved) {
            document.querySelector('table').style.border = '2px solid green';
            let output = 'You solve it! Congratulations!';
            let outputParagraph = document.querySelector('#check p');
            outputParagraph.style.color = 'green';
            outputParagraph.textContent = output;
        }
    }

    function clearOnClick(ev) {
        let cells = document.querySelectorAll('tbody td input');

        for (cell of cells) {
            cell.value = '';
        }

        document.querySelector('table').style.border = 'none';
        document.querySelector('#check p').textContent = '';
    }
}