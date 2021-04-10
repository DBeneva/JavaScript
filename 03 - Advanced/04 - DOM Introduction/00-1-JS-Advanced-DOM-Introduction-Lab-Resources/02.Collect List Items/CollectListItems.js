function extractText() {
    const liElements = [...document.getElementsByTagName('li')];
    const elementText = liElements.map(x => x.textContent).join('\n');
    document.getElementById('result').value = elementText;
}