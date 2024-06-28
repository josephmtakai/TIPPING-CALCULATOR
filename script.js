// script.js

document.getElementById('tip-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseInt(document.getElementById('tip-percentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Please enter valid numbers.');
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;

    displayResults(tipAmount, totalBill);
});

function displayResults(tipAmount, totalBill) {
    document.getElementById('tip-amount').textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('total-bill').textContent = `$${totalBill.toFixed(2)}`;
}
