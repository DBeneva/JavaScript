function passwordValidator(password) {
    let outputLine = lengthIs6To10(password) == true ? '' : lengthIs6To10(password);
    outputLine += isOnlyLettersAndDigits(password) == true ? '' : isOnlyLettersAndDigits(password);
    outputLine += atLeast2Digits(password) == true ? '' : atLeast2Digits(password);
    console.log(outputLine == '' ? 'Password is valid' : outputLine);

    function lengthIs6To10(string) {
        return (string.length >= 6 && string.length <= 10) ? true : 'Password must be between 6 and 10 characters\n';
    }

    function isLetter(element) {
        let code = element.charCodeAt();
        return ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) ? true : false;
    }

    function isDigit(element) {
        return (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) ? true : false;
    }

    function isOnlyLettersAndDigits(string) {
        let isOnlyLettersAndDigits = true;

        for (let element of string) {
            if (!isLetter(element) && !isDigit(element)) {
                isOnlyLettersAndDigits = false;
                break;
            }
        }

        return isOnlyLettersAndDigits ? true : 'Password must consist only of letters and digits\n';
    }

    function atLeast2Digits(string) {
        let digits = 0;

        for (let element of string) {
            if (isDigit(element)) {
                digits++;
            }
        }

        return digits >= 2 ? true : 'Password must have at least 2 digits\n';
    }
}

passwordValidator('Mass1');