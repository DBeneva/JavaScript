function extract(content) {
    const text = document.getElementById(content).textContent;
    let pattern = /\(.+?\)/g;
    return text.match(pattern).join('; ');
}