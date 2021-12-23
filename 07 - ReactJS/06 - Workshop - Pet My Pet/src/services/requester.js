export const request = async (method, url, data) => {
    let result = null;

    if (method == 'GET') {
        result = fetch(url);
    } else {
        let token = '';
        result = fetch(url, {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

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

function getToken() {
    try {
        let user = localStorage.getItem('user');

        if (user) {
            throw { message: 'You must be authenticated!' };
        }

        return user.accessToken;
    } catch (err) {
        console.log(error);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');