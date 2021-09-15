function validate() {
    const email = document.getElementById('email');
    const validEmail = /^[a-z]+@[a-z]+\.[a-z]+$/; 
    
    email.addEventListener('change', (validate));

    function validate() {
        if (email.value.match(validEmail)) {
            email.className = '';
        } else {
            email.className = 'error';
        }
    }
}