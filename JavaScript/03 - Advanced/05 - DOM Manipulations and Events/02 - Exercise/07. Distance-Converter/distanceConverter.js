function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', convert);

    function convert(ev) {
        let input = Number(document.getElementById('inputDistance').value);
        let inputUnit = Array.from(document.querySelectorAll('#inputUnits option'))
            .filter(x => x.selected)[0].value;
        let outputUnit = Array.from(document.querySelectorAll('#outputUnits option'))
            .filter(x => x.selected)[0].value;
        let result = 0;

        let converter = {
            km: {
                from: () => input *= 1000,
                to: () => result = input / 1000
            },
            cm: {
                from: () => input *= 0.01,
                to: () => result = input / 0.01
            },
            mm: {
                from: () => input *= 0.001,
                to: () => result = input / 0.001
            },
            mi: {
                from: () => input *= 1609.34,
                to: () => result = input / 1609.34
            },
            yrd: {
                from: () => input *= 0.9144,
                to: () => result = input / 0.9144
            },
            ft: {
                from: () => input *= 0.3048,
                to: () => result = input / 0.3048
            },
            in: {
                from: () => input *= 0.0254,
                to: () => result = input / 0.0254
            }
        };

        input = converter[inputUnit] ? converter[inputUnit].from() : input;
        result = converter[outputUnit] ? converter[outputUnit].to() : input;
        let output = document.getElementById('outputDistance');
        output.value = result;
    }
}