function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-password');
    const checkbox = document.getElementById('company');
    const company = document.getElementById('companyInfo');
    const companyNum = document.getElementById('companyNumber');
    const submitBtn = document.getElementById('submit');
    const divValid = document.getElementById('valid');

    const validUsername = /^([^\W_]){3,20}$/;
    const validPassword = /^\w{5,15}$/;
    const validEmail = /^(.+@(.+)?\.(.+)?)$/;

    checkbox.addEventListener('change', showCompanyInfo);
    submitBtn.addEventListener('click', validateInput);

    function showCompanyInfo() {
        company.style.display = checkbox.checked ? 'block' : 'none';
    }

    function validateInput(ev) {
        ev.preventDefault();
        let validInput = true;

        redBorderIfInvalid(username, validUsername);
        redBorderIfInvalid(email, validEmail);
        redBorderIfInvalid(pass, validPassword);

        if (confirmPass.value != pass.value || pass.style.borderColor == 'red') {
            confirmPass.style.borderColor = 'red';
            pass.style.borderColor = 'red';
            validInput = false;
        }

        if (checkbox.checked) {
            let num = companyNum.value;

            if (num >= 1000 && num <= 9999) {
                companyNum.style.border = 'none';
            } else {
                companyNum.style.borderColor = 'red';
                validInput = false;
            }
        }

        divValid.style.display = validInput ? 'block' : 'none';

        function redBorderIfInvalid(el, regex) {
            if (el.value.match(regex)) {
                el.style.border = 'none';
            } else {
                el.style.borderColor = 'red';
            }

            if (el.style.borderColor == 'red') {
                validInput = false;
            }
        }
    }
}