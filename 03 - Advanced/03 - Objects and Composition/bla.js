function main() {
    try {
        new Array(-1);
    } catch (err) {
        console.log(err); // prints 'RangeError: Invalid array length'
        console.log(err.message); // prints 'invalid array length'
        console.log(err.name); // prints 'invalid array length'
        console.log(err.stack); // prints 'invalid array length'
    }


}

main();