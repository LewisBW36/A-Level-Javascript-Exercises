// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', checkNumber);
});

// Function to check if a number is positive, negative, or zero
function checkNumber() {
    // TODO: Get the number from the input field
    let number = parseFloat(document.getElementById('number').value);
    // TODO: Check if the number is positive, negative, or zero
    let result = ''
    if (number > 0) {
        result = "positive";
    } else if (number < 0) {
        result = "negative";
    } else {
        result = "zero";
    }
    // TODO: Display the appropriate message (POSITIVE, NEGATIVE, or ZERO)
    document.getElementById('result').textContent = `The number is ${result}`
}
