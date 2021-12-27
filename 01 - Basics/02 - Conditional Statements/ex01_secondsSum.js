function printTime([first, second, third]) {
    const time = Number(first) + Number(second) + Number(third);
    const minutes = Math.floor(time / 60);
    const seconds = getSeconds(time - minutes * 60);    

    console.log(`${minutes}:${seconds}`);

    function getSeconds(seconds) {
        if (seconds < 10) return '0' + seconds;
        return seconds;
    }
}

printTime(['35', '45', '44']);