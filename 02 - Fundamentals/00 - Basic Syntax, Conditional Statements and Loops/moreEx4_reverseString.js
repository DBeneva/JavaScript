function reverseString(string) {
    let reversedString = string
        .split('')
        .reverse()
        .join('');
        
    console.log(reversedString);
}

reverseString('Hello');