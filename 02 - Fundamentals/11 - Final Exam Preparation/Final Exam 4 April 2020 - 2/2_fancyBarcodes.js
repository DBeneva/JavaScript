function fancyBarcodes(input) {
    let n = Number(input.shift());
    input = input.splice(0, n);
    let validCode = /^@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+$/;
    let productGroup = '00';

    input.forEach(barcode => {
        if (!barcode.match(validCode)) {
            console.log('Invalid barcode');
        } else {
            productGroup = barcode.match(/\d/) ?
                barcode.match(/\d/g).join('') : '00';
            console.log(`Product group: ${productGroup}`);
        }
    });
}

fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ]
  );