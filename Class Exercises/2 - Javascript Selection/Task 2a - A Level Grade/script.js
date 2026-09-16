// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
    let comp1;
    let comp2;
    let comp3;
    let comp4;
    comp1 = parseInt(document.getElementById('comp1').value);
    comp2 = parseInt(document.getElementById('comp2').value);
    comp3 = parseInt(document.getElementById('comp3').value);
    comp4 = parseInt(document.getElementById('comp1').value);
    // TODO: Calculate the total marks
    let totalmarks;
    totalmarks = comp1 + comp2 + comp3 + comp4
    // TODO: Calculate the percentage (total possible marks is 400)
    let percentage;
    percentage = (totalmarks / 400) * 100
    percentage = Math.round(percentage)
    // TODO: Determine the grade based on the percentage
    let grade;
    // A: 80% or greater
    if (percentage >= 80) {
        grade = "A for.. amazing! Great job!!";
    }
    // B: 70% or greater
    else if (grade >= 70 && grade < 80) {
        grade = "you should.. B happy with this grade!";
    }
    // C: 60% or greater
    else if (grade >= 60 && grade > 70) {
        grade = "i C.. that you tried!";
    }
    // D: 50% or greater
    else if (grade >= 50 && grade > 60) {
        grade = "a D is still ok..";
    }
    // E: 40% or greater
    else if (grade >= 40 && grade < 50) {
        grade = "E.. for.. effort?";
    }
    // U: Less than 40%
    else if ( percentage < 40 ) {
        grade = "you got a U.. yikes";
    }
    // TODO: Display the percentage and grade
    document.getElementById('result').textContent = `Your percentage was ${percentage}%, ${grade}`
}
