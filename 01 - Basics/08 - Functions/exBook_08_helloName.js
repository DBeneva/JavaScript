function helloName(name) {
    console.log(greetByName(name));

    function greetByName(name) {
        return `Hello, ${name}!`;
    }
}

helloName('Peter');