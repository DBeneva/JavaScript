async function getInfo() {
    const input = document.getElementById('stopId');
    const stopId = input.value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    buses.innerHTML = '';
    
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        const stop = await response.json();
        stopName.textContent = stop.name;
        
        Object.entries(stop.buses).forEach(([bus, time]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            buses.appendChild(li);
        });

        input.value = '';
    } catch (error) {
        stopName.textContent = 'Error';
    }
}