function requestValidator(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (obj.method == undefined || !methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    
    if (obj.uri == undefined || !obj.uri.match(/^([A-Za-z0-9\.]+|\*)$/)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    
    if (obj.version == undefined || !versions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    
    if (obj.message == undefined || obj.message.match(/[<>\\&'"]/)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

requestValidator({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
});