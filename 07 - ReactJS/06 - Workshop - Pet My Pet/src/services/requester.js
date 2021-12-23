export const request = (method, url) => {
    return fetch(url).then(responseHandler);
};

async function responseHandler(res) {
    let jsonData = await res.json();

    if (res.ok) {
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }
}

export const get = request.bind(null, 'GET');