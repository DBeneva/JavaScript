function encodeAndDecodeMessages() {
    let textareas = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');

    let obj = {
        encode: {
            text: textareas[0],
            btn: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            text: textareas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    };

    document.getElementById('main').addEventListener('click', (ev) => {
        if (ev.target.tagName != 'BUTTON') return;        
        let step = ev.target == obj.encode.btn ? 'encode' : 'decode';
        let message = obj[step].text.value
            .split('').map(obj[step].func).join('');
        obj.encode.text.value = '';
        obj.decode.text.value = message;
    });
}