// TODO: Write the countdown function
function startCountdown() {
    console.log("clicked")
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton');
    
    // TODO: Validate inputs
    // Check if values are valid numbers
    if (isNaN(startNum) || isNaN(delay)) {
        document.getElementById('countdownDisplay').textContent = "Check numbers are valid";
    }
    // Check if start number is positive
    else if (startNum < 0 ) {
        document.getElementById('countdownDisplay').textContent = "Check start number is positive";
    }
    // Check if delay is at least 100ms
    else if (delay < 99) {
        document.getElementById('countdownDisplay').textContent = "Check delay being too short";
    }
    // TODO: Disable button during countdown
    button.disabled = true;
    // TODO: Create the countdown loop
    for( let i = startNum; i >= 0; i-=1 ) {
        setTimeout( {
    document.getElementById('countdownDisplay').textContent = i;

    }
    // Use a for loop counting backwards
    // Use setTimeout to create the delay between numbers
    // TODO: Show "Blast off!" at the end
    
if ( i == 0 ) {
  
        document.getElementById('countdownDisplay').textContent = "Blast off!";
        button.disabled = false; 
  
} else {
    i;
}
// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
};
