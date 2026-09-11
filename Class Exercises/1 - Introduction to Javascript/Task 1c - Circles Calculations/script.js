// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    let radius = parseFloat(document.getElementById('radius').value);
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    const circumference = 2 * Math.PI * radius;
    //    - Area using the formula: π * radius^2
    const area = Math.PI * (radius**2);
    // 3. Display both results in their respective span elements
    // Note: Use Math.PI for the value of π
    document.getElementById('circumference').textContent = `${circumference}`;
    document.getElementById('area').textContent = `${area}`
}
