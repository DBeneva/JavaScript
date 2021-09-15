function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    daysBtn.addEventListener('click', (ev) => {
        let time = Number(daysInput.value);
        hoursInput.value = time * 24;
        minutesInput.value = time * 1440;
        secondsInput.value = time * 86400;
    });

    hoursBtn.addEventListener('click', (ev) => {
        let time = Number(hoursInput.value);
        daysInput.value = time / 24;
        minutesInput.value = time * 60;
        secondsInput.value = time * 3600;
    });

    minutesBtn.addEventListener('click', (ev) => {
        let time = Number(minutesInput.value);
        daysInput.value = time / 1440;
        hoursInput.value = time / 60;
        secondsInput.value = time * 60;
    });

    secondsBtn.addEventListener('click', (ev) => {
        let time = Number(secondsInput.value);
        daysInput.value = time / 86400;
        hoursInput.value = time / 3600;
        minutesInput.value = time / 60;

    });
}