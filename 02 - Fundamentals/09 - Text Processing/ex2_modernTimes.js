function modernTimes(string) {
    string.split(' ').map(x => {
        if (x.startsWith('#') && isOnlyLetters(x) && x.length > 1) {
            console.log(x.substring(1));
        }
    });

    function isOnlyLetters(string) {
        string = string.substring(1);
        for (let char of string) {
            let code = char.charCodeAt();
            if (code < 65 || (code > 90 && code < 97) || code > 122) {
                return false;
            }
        }
        return true;
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');