function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {
        let elementToString = array[i].toString();
        console.log(checkIfPalindrome(elementToString));
    }

    function checkIfPalindrome(string) {
        let midString = string.length / 2;
        let isPalindrome = true;

        for (index = 0; index < midString; index++) {
            let firstElement = string[index];
            let secondElement = string[string.length - 1 - index];
            
            if (firstElement != secondElement) {
                isPalindrome = false;
                break;
            }
        }

        return isPalindrome;
    }
}

palindromeIntegers([32,2,232,1010]);