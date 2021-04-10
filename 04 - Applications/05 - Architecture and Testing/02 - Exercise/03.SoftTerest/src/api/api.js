export const settings = {
    host: ''
};

async function request(url, options) {
    const response = await fetch(url, options);
    
    if (response.ok != true) {
        const error = await response.json();
        
        alert(error.message);
        throw new Error(error.message);
    }

    try {
        return response.json();
    } catch (err) {
        return response;
    }
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = sessionStorage.getItem('userToken');

    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const response = await api.post(settings.host + '/users/login', { email, password });
    
    sessionStorage.setItem('userToken', response.accessToken);
    sessionStorage.setItem('userId', response._id);
    sessionStorage.setItem('userEmail', response.email);

    return response;
}

export async function register(email, password) {
    const response = await api.post(settings.host + '/users/register', { email, password });
    
    sessionStorage.setItem('userToken', response.accessToken);
    sessionStorage.setItem('userId', response._id);
    sessionStorage.setItem('userEmail', response.email);

    return response;
}

export async function logout() {
    await get(host + '/users/logout');

    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userEmail');
}

export async function getUserEmail() {
    return sessionStorage.getItem('userEmail');
}