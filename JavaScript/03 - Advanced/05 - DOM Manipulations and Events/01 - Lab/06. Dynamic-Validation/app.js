function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        let email = ev.target.value;
        let validEmail = /^[a-z]+@[a-z]+\.[a-z]+$/g;
        
        if (validEmail.test(email)) {
            ev.target.className = '';
        } else  {
            ev.target.className = 'error';
        }
    }
}