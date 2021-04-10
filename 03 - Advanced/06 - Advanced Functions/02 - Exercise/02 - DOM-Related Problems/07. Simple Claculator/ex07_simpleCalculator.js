function simpleCalc() {
    let firstEl;
    let secondEl;
    let resultEl;

    return {
        init(selector1, selector2, result) {
            firstEl = document.querySelector(selector1);
            secondEl = document.querySelector(selector2);
            resultEl = document.querySelector(result);
        },
        add() {
            let result = Number(firstEl.value) + Number(secondEl.value);
            resultEl.value = result;
        },
        subtract() {
            let result = Number(firstEl.value) - Number(secondEl.value);
            resultEl.value = result;
        }
    };
}

let obj = simpleCalc();
obj.init('#num1', '#num2', '#result');