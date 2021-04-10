function notifications(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let operation = '';
    let messageText = '';
    let errorCode = '';

    for (let message = 1; message <= n; message++) {
        let messageType = input[index];
        index++;

        switch (messageType) {
            case 'success':
                operation = input[index];
                index++;
                messageText = input[index];
                index++;
                showSuccessMessage(operation, messageText);
                break;
            case 'warning':
                messageText = input[index];
                index++;
                showWarningMessage(messageText);
                break;
            case 'error':
                operation = input[index];
                index++;
                messageText = input[index];
                index++;
                errorCode = input[index];
                index++;
                showErrorMessage(operation, messageText, errorCode);
                break;
        }
    }
}

function showSuccessMessage(operation, messageText) {
    let firstLine = `Successfully executed ${operation}.`;
    let secondLine = '='.repeat(firstLine.length);
    let thirdLine = messageText + '.';

    console.log(firstLine);
    console.log(secondLine);
    console.log(thirdLine);
    console.log(' ');
}

function showWarningMessage(messageText) {
    let firstLine = `Warning: ${messageText}.`;
    let secondLine = '='.repeat(firstLine.length);

    console.log(firstLine);
    console.log(secondLine);
    console.log(' ');
}

function showErrorMessage(operation, messageText, errorCode) {
    let firstLine = `Error: Failed to execute ${operation}.`;
    let secondLine = '='.repeat(firstLine.length);
    let thirdLine = `Reason: ${messageText}.`;
    let fourthLine = `Error code: ${errorCode}.`;

    console.log(firstLine);
    console.log(secondLine);
    console.log(thirdLine);
    console.log(fourthLine);
    console.log(' ');
}

notifications(['4', 'error', 'credit card purchase',
    'Invalid customer address', '500', 'warning',
    'Email not confirmed', 'success', 'user registration',
    'User registered successfully', 'warning',
    'Customer has not email assigned']);