// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePay);
});

// Function to calculate the worker's pay
function calculatePay() {
    // TODO: Get the age and hours worked from the input fields
    let age = document.getElementById('age').value;
    let hours = document.getElementById('hours').value;
    // TODO: Set the hourly rate based on age (£4.85 for under 18, £6.35 for 18 and over)
    let rate;
    if (age >= 18) {
        rate = 6.35;
    } else {
        rate = 4.85;
    }
    // TODO: Calculate total pay
    let pay = hours * rate;
    pay = Math.round(pay)
    // TODO: Display the hours worked and total amount earned
    document.getElementById('result').textContent = `Worked ${hours} hours and earned ${pay} pounds`
}
