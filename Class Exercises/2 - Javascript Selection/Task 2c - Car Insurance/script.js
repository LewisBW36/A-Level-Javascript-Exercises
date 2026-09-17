// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let age;
    let noclaims;
    let previousclaims;
    age = parseInt(document.getElementById('age').value);
    noclaims = parseFloat(document.getElementById('noClaims').value);
    previousclaims = parseFloat(document.getElementById('previousClaims').value);
    // TODO: Calculate base premium (£500)
    let basepremium = 500;
    // TODO: Apply age adjustment
    // Under 25: +50%
    if (age < 25) {
        basepremium*=1.5;
    }
    // 25-40: No change
    else if (age < 40 && age > 24) {
        basepremium = basepremium
    }
    // Over 40: -15%
    else {
        basepremium*=0.85;
    }
    // TODO: Apply no claims bonus
    // 0 years: No discount
    if (noclaims == 0) {
        basepremium = basepremium;
    }
    // 1-2 years: 10% discount
    else if (noclaims > 0 && noclaims < 3) {
        basepremium*=0.9;
    }
    // 3-5 years: 25% discount
    else if (noclaims > 2 && noclaims < 6) {
        basepremium*=0.75;
    }
    // Over 5 years: 35% discount
    else {
        basepremium*=0.65;
    }
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    basepremium+=(0.2*previousclaims);
    // TODO: Display the final premium and the breakdown of calculations
    document.getElementById('result').textContent = `The base premium was ${basepremium}`
}
