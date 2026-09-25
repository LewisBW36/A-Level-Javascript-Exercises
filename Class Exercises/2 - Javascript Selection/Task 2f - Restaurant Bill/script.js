// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateBill);
});

// Function to calculate the restaurant bill
function calculateBill() {
    // TODO: Get all input values
    let foodsTotal = parseFloat(document.getElementById('foodsTotal').value);
    let drinksTotal = parseFloat(document.getElementById('drinksTotal').value);
    let diners = parseInt(document.getElementById('diners').value);
    let kidsCount = parseFloat(document.getElementById('kidsCount').value);
    let day = document.getElementById('day').value;
    let time = document.getElementById('time').value;
    let loyaltyCard = document.getElementById('loyaltyCard').value;
    // TODO: Calculate service charge based on group size
    let serviceCharge;
    // 1-4: No mandatory charge
    if (kidsCount < 5) {
    serviceCharge;
    }
    // 5-8: 10%
    else if (kidsCount > 4 && kidsCount < 9) {
         serviceCharge = 1.1;
    }
    // 8+: 15%
    else {
        serviceCharge = 1.15;
    }
    // TODO: Apply time-based discounts
    let foodDiscount;
    let drinkDiscount;
    let totalDiscount;
    // Before 5 PM: 20% off food
    if (time < 17) {
        foodDiscount = 0.8;
    }
    // 5-7 PM: 25% off drinks
    else if ( time >= 17 && time < 19) {
        drinkDiscount = 0.75
    }
    // After 10 PM: 10% off total
    else {
        totalDiscount = 0.9
    }
    // TODO: Apply special offers
    // Mon-Thu: Second main half price
    let dayDiscount;
    let kidsEatFree;
    if (day === "Monday" || day === "Tuesday"  || day === "Wednesday"  || day === "Thursday") {
    dayDiscount = 0.5
    }
    // Sunday: Kids eat free (max 2 per adult)
    else if (day === "Sunday" && diners/kidsCount <= 2) {
    kidsEatFree = 2
    }
    // TODO: Apply loyalty card discount
    // Bronze: 5% off
    // Silver: 10% off
    // Gold: 15% off
    
    // TODO: Calculate subtotal
    
    // TODO: Create breakdown of all discounts applied
    
    // TODO: Calculate and display final total
}
