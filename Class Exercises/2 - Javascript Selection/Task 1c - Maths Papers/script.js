// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    // TODO: Get the marks for all three papers
    let paper1 = parseInt(document.getElementById('paper1').value);
    let paper2 = parseInt(document.getElementById('paper2').value);
    let paper3 = parseInt(document.getElementById('paper3').value);
    // TODO: Calculate the total mark
    let totalMark = paper1 + paper2 + paper3;
    // TODO: Check if total is greater than 160
    let pass;
    if (totalMark > 160) {
        pass = 'You passed, congrats!';
    } else if (totalMark < 160) {
        pass = 'you.. FAILED HAHAHAHAHAHA';
    } else {
        pass = 'huh?'
    }
    // TODO: Display the total mark and whether the student passed or failed
    document.getElementById('result').textContent = `total mark was ${totalMark}, ${pass}`
}
