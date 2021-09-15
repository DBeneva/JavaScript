function solve() {
  const input = document.getElementById('input').value;
  const sentencesArr = input
    .split('.')
    .filter(sentence => sentence.length > 0);

  const paragraphs = [];

  while (sentencesArr.length > 0) {
    let paragraph = `  <p>${sentencesArr.splice(0, 3).join('. ')}.</p>`;
    paragraphs.push(paragraph);
  }

  document.getElementById('output').innerHTML = paragraphs.join('\n');
}