// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCommission);

function calculateCommission() {
    // 1. Get all invoice numbers and amounts from the input fields
    const sales = [
        {
            invoice: document.getElementById('invoice1').value || 'Unknown',
            amount: parseFloat(document.getElementById('amount1').value) || 0
        },
        {
            invoice: document.getElementById('invoice2').value || 'Unknown',
            amount: parseFloat(document.getElementById('amount2').value) || 0
        },
        {
            invoice: document.getElementById('invoice3').value || 'Unknown',
            amount: parseFloat(document.getElementById('amount3').value) || 0
        }
    ];

    // 2. Calculate total sales and commission
    let totalSales = 0;

    sales.forEach((sale) => {
        totalSales += sale.amount;
    });

    const commission = totalSales * 0.20;

    // 3. Display each sale's details, total sales, and commission earned
    let salesDetails = '';

    sales.forEach((sale) => {
        salesDetails += `Invoice ${sale.invoice}: £${sale.amount.toFixed(2)}<br>`;
    });

    document.getElementById('salesDetails').innerHTML = salesDetails;
    document.getElementById('totalSales').textContent = totalSales.toFixed(2);
    document.getElementById('commission').textContent = commission.toFixed(2);
}
