// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    let numA = parseFloat(document.getElementById('numberA').value);
    let numB = parseFloat(document.getElementById('numberB').value);
    let numC = parseFloat(document.getElementById('numberC').value);
    // 2. Calculate:
    //    - (A + B + C) / 3
    const average = (numA + numB + numC) / 3;
    //    - A × B × C
    const product = numA * numB * numC;
    //    - A + (B × C)
    const expression = numA + (numB * numC);
    // 3. Display the results in the respective span elements

    document.getElementById('average').textContent = `The average is: ${average}`;
document.getElementById('product').textContent = `The product is: ${product}`;
document.getElementById('expression').textContent = `The average is: ${expression}`
} 
