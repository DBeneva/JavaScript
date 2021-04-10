function santasSecretHelper(input) {
    let key = Number(input.shift());
    let messages = input.slice(0, input.indexOf('end'));

    messages.forEach(message => {
        let decrypted = '';
        
        for (let char of message) {
            decrypted += String.fromCharCode(char.charCodeAt() - key);
        }
        
        let validMessage = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behavior>[GN])!/;
        let match = decrypted.match(validMessage);
        let output = match && match.groups.behavior == 'G' ?
            console.log(match.groups.name) : '';
    });
}

santasSecretHelper([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
  ]
  
  );