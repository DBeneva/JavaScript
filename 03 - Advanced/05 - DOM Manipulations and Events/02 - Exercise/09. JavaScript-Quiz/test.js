function solve() {
    let sections = Array.from(document.querySelectorAll('section'));
    let key = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let correctAnswers = 0;
    let index = 0;

    while (sections[index]) {
        sections[index].style.display = 'block';
        sections[index].addEventListener('click', (ev) => {
            let answers = Array.from(sections[index].querySelectorAll('li div p'));

            if (answers.includes(ev.target)) {
                correctAnswers = key.includes(ev.target.textContent) ?
                    correctAnswers + 1 : correctAnswers;
                sections[index].style.display = 'none';
                index++;
            }
        });
    }


    let result = correctAnswers == 3 ?
        'You are recognized as top JavaScript fan!' :
        `You have ${correctAnswers} right answers`;

    let outputUl = document.getElementById('results');
    let outputH1 = outputUl.querySelector('li.results-inner h1');
    outputH1.textContent = result;
    outputUl.style.display = 'block';
}