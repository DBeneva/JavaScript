function solve() {
  let quizDiv = document.getElementById('quizzie');
  quizDiv.addEventListener('click', onClick);
  let sections = Array.from(document.querySelectorAll('section'));
  let current = 0;
  let currentSection = sections[current];
  let key = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let correctAnswers = 0;

  function onClick(ev) {
    if (currentSection) {
      currentSection.style.display = 'block';
      let answers = Array.from(currentSection.querySelectorAll('li div p'));
      
      if (answers.includes(ev.target)) {
        correctAnswers = key.includes(ev.target.textContent) ?
          correctAnswers + 1 : correctAnswers;
        currentSection.style.display = 'none';
        current++;
        currentSection = sections[current];

        if (currentSection) {
          currentSection.style.display = 'block';
        } else {
          let result = correctAnswers == 3 ?
            'You are recognized as top JavaScript fan!' :
            `You have ${correctAnswers} right answers`;
        
          let outputUl = document.getElementById('results');
          let outputH1 = outputUl.querySelector('li.results-inner h1');
          outputH1.textContent = result;
          outputUl.style.display = 'block';
        }
      }
    }
  }
}
