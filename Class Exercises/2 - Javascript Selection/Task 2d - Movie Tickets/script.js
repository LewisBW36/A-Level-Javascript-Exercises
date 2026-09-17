// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateTotal);
});

// Function to calculate the total ticket cost
function calculateTotal() {
    // TODO: Get values from all input fields
    let adultTickets = parseInt(document.getElementById('adultTickets').value);
    let childTickets = parseInt(document.getElementById('childTickets').value);
    let seniorTickets = parseInt(document.getElementById('seniorTickets').value);
    let dayOfWeek = document.getElementById('dayOfWeek').value;
    let showingTime = document.getElementById('showingTime');
    // TODO: Calculate base costs
    // Adult: £12.00
    let adultCost = 12
    // Child: £8.00
    let childCost = 8
    // Senior: £7.50
    let seniorCost = 7.5
    
    // TODO: Apply day of week adjustments
    // Friday-Sunday: +£2.50 per ticket
    if (dayOfWeek == "Friday" || dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
        adultCost+=2.5;
        childCost+=2.5;
        seniorCost+=2.5;
    } else {
        adultCost;
        childCost;
        seniorCost;
    }
    // Before 5 PM: -£1.50 per ticket
    if (showingTime > 16.59) {
        adultCost-=1.5;
        childCost-=1.5;
        seniorCost-=1.5;
    } else {
    adultCost;
    childCost;
    seniorCost;
    }
    // TODO: Calculate subtotal
    let subtotal = adultCost + childCost + seniorCost;
    subtotal = (adultCost*adultTickets) + (childCost*childTickets) + (seniorCost*seniorTickets);
    let priceBreakdown = subtotal;
    let discounts = "";
    let finalTotal;
    // TODO: Check for and apply special discounts
    // Family ticket (2 adults + 2 children): 10% off
    if (adultTickets == 2 && childTickets == 2) {
        priceBreakdown*=0.9;
        discounts+="Family Ticket ";
    } else {
        priceBreakdown;
    }
    // Group booking (6 or more tickets): 15% off
    if ((adultTickets+childTickets+seniorTickets) > 5) {
        priceBreakdown*=0.85;
        discounts+="Group Booking";
    } else {
        priceBreakdown;
    }
    finalTotal = priceBreakdown;
    // TODO: Display price breakdown, subtotal, any discounts, and final total
document.getElementById('priceBreakdown','finalTotal','discount','subtotal').textContent = `The subtotal was £${subtotal}, but after applying ${discounts}, it is now £${finalTotal}`
}