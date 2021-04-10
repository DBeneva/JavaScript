function lockedProfile() {
    document.getElementById('main').addEventListener('click', (ev) => {
        let profile = ev.target.parentNode;
        let isUnlocked = profile.querySelector('input[value="unlock"]').checked;
        let hiddenDiv = ev.target.parentNode.querySelector('div');
        let isVisible = hiddenDiv.style.display == 'block';

        if (ev.target.tagName == 'BUTTON' && isUnlocked) {
            hiddenDiv.style.display = isVisible ? 'none' : 'block';
            ev.target.textContent = ev.target.textContent == 'Show more' ? 'Hide it' : 'Show more';
        }
    });
}