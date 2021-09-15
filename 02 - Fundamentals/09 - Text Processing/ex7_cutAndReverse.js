cutAndReverse = function (string) {
    console.log(string
        .substring(0, string.length / 2)
        .split('')
        .reverse()
        .join(''));
    console.log(string
        .substring(string.length / 2)
        .split('')
        .reverse()
        .join(''));
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');