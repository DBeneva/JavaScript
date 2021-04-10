function calculateTriangleArea(input) {
    a = Number(input[0]);
    h = Number(input[1]);
    let area = triangleArea(a, h);
    
    console.log(area);

    function triangleArea(a, h) {
        return a * h / 2;
    }
}

calculateTriangleArea(['3', '4']);