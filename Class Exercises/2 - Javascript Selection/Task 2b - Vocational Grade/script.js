// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores
    let theory;
    let practical;
    theory = parseInt(document.getElementById('theory').value);
    practical = parseInt(document.getElementById('practical').value);
    // TODO: Check if both scores are above 50% (Pass requirement)
    if (theory > 50 && practical > 50) {
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
    if ( theory > 70 && practical > 70) {
        mark = "distinction"
    }}
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    // Also display the average score
}
