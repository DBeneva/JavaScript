function toggle() {
    let button = document.querySelector('.button');
    let divExtra = document.querySelector('#extra');
    const isHidden = button.textContent == 'More';
    button.textContent = isHidden ? 'Less' : 'More';
    divExtra.style.display = isHidden ? 'block' : 'none';
}