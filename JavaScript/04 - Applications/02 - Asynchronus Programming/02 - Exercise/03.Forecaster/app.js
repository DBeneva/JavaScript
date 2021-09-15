function attachEvents() {
    const button = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');

    button.addEventListener('click', getWeather);


    async function getWeather() {
        try {
            const location = document.getElementById('location').value;
            const code = await getCode(location);
            const currentForecast = await getCurrentForecast(code);
            const upcomingForecast = await getUpcomingForecast(code);

            clearPreviousForecast();
            forecastDiv.style.display = 'block';
            displayCurrentForecast(location, currentForecast);
            displayUpcomingForecast(upcomingForecast);
        } catch (error) {
            forecastDiv.innerHTML = 'Error';
        }
    }

    async function getCode(location) {
        const responseLocations = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const locations = await responseLocations.json();

        return locations.find(x => x.name == location).code;
    }

    async function getCurrentForecast(code) {
        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        const forecast = await response.json();

        return forecast.forecast;
    }

    async function getUpcomingForecast(code) {
        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        const forecast = await response.json();

        return forecast.forecast;
    }

    function clearPreviousForecast() {
        if (forecastDiv.innerHTML == 'Error') {
            currentDiv = e('div', { id: 'current' },
                e('div', { className: 'label' }, 'Current conditions')
            );

            upcomingDiv = e('div', { id: 'upcoming' },
                e('div', { className: 'label' }, 'Three-day forecast')
            );

            forecastDiv.innerHTML = '';
            forecastDiv.appendChild(currentDiv);
            forecastDiv.appendChild(upcomingDiv);
        }

        if (currentDiv.children.length > 1) {
            currentDiv.querySelector('.forecasts').remove();
            upcomingDiv.querySelector('.forecast-info').remove();
        }
    }

    function displayCurrentForecast(location, currentForecast) {
        const forecast = e('div', { className: 'forecasts' },
            e('span', { className: 'condition symbol', innerHTML: getSymbol(currentForecast) }),
            e('span', { className: 'condition' },
                e('span', { className: 'forecast-data', innerHTML: `${location}, ${getCountry(location)}` }),
                e('span', { className: 'forecast-data', innerHTML: `${currentForecast.low}&deg;/${currentForecast.high}&deg;` }),
                e('span', { className: 'forecast-data', innerHTML: currentForecast.condition })
            )
        );

        currentDiv.appendChild(forecast);
    }

    function displayUpcomingForecast(upcomingForecast) {
        const forecastInfo = e('div', { className: 'forecast-info' });

        upcomingForecast.forEach(forecast => {
            forecast = e('span', { className: 'upcoming' },
                e('span', { className: 'symbol', innerHTML: getSymbol(forecast) }),
                e('span', { className: 'forecast-data', innerHTML: `${forecast.low}&deg;/${forecast.high}&deg;` }),
                e('span', { className: 'forecast-data' }, forecast.condition)
            );

            forecastInfo.appendChild(forecast);
        });

        upcomingDiv.appendChild(forecastInfo);
    }

    function getSymbol(currentForecast) {
        const symbols = {
            Sunny: '&#x2600;',
            'Partly sunny': '&#x26C5;',
            Overcast: '&#x2601;',
            Rain: '&#x2614;',
            Degrees: '&#176;'
        };

        return symbols[currentForecast.condition];
    }

    function getCountry(location) {
        const countries = {
            'New York': 'USA',
            London: 'UK',
            Barcelona: 'Spain'
        };

        return countries[location];
    }

    function e(type, attributes, ...content) {
        let element = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.slice(0, 2) == 'on') {
                element.addEventListener(attr.slice(2).toLocaleLowerCase(), value);
            } else {
                element[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(c), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                element.appendChild(node);
            } else {
                element.appendChild(e);
            }
        });

        return element;
    }
}

attachEvents();