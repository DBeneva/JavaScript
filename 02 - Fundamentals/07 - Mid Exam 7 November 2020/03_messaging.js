function messaging(input) {
    input = input.slice(0, input.indexOf('end'));
    let chat = [];

    let actions = {
        Chat(_, messages) {
            chat.push(messages[0]);
        },
        Delete(array, messages) {
            if (array.includes(messages[0])) {
                array.splice(array.indexOf(messages[0]), 1);
            }
        },
        Edit(array, messages) {
            array.splice(array.indexOf(messages[0]), 1, messages[1]);
        },
        Pin(array, messages) {
            array.splice(array.indexOf(messages[0]), 1);
            array.push(messages[0]);
        },
        Spam(array, messages) {
            while (messages.length > 0) {
                array.push(messages.shift());
            }
        }
    };

    while(input.length > 0) {
        let command = input.shift().split(' ');
        let messages = command.splice(1, command.length - 1);
        actions[command[0]](chat, messages);       
    }

    console.log(chat.join('\n'));
}

messaging([
    'Chat John',
    'Spam Let\'s go to the zoo',
    'Edit zoo cinema',
    'Chat tonight',
    'Pin John',
    'end'
]);