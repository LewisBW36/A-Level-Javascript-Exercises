// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateOrder);

function calculateOrder() {
    // TODO:
    // 1. Get the order number and quantity from the input fields
    let number = parseInt(document.getElementById('orderNumber').value);
    let quantity = parseInt(document.getElementById('quantity').value);
    // 2. Calculate the total cost (£2.45 per bag)
    let cost = quantity * (2.45);
    cost = Math.round(cost,2);
    // 3. Display:
    //    - Order number
    document.getElementById('orderNumber').textContent = `${number}`
    //    - Quantity
    document.getElementById('quantity').textContent = `${quantity}`
    //    - Total cost (format to 2 decimal places)
    document.getElementById('totalCost').textContent = `${cost}`
}
