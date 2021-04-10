function matchPhoneNumber([phoneNumbers]) {
    let pattern = new RegExp('\\+359([ \\-])2\\1\\d{3}\\1\\d{4}\\b', 'g');
    console.log(phoneNumbers.match(pattern).join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);