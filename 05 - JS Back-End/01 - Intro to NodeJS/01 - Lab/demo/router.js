const handlers = {};

function match(method, url) {
    const method = handlers[url] || {};
    
    if (method == undefined) {
        return defaultHandler;
    }

    const handler = handlers[url];

    if (handler == undefined) {
        return defaultHandler;
    } else {
        handler;
    }
}

function registerHandler(method, url, handler) {
    let methods = handlers[url];

    if (methods == undefined) {
        methods = {};
        handlers[url] = method;
    }

    handlers[url][method] = handler;
}

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Not Found');
    res.end();
}

module.exports = {
    registerHandler,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    delete: (...params) => registerHandler('DELETE', ...params),
    match
};