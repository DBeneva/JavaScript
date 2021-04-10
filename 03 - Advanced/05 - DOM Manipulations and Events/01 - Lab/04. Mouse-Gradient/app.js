function attachGradientEvents() {
    let target = document.getElementById('gradient');
    target.addEventListener('mousemove', onMove);
    let result = document.getElementById('result');
    
    function onMove(event) {
        let percentage = Math.floor(event.offsetX / event.target.clientWidth * 100);
        result.textContent = `${percentage}%`;
    }
}