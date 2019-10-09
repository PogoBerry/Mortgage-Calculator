// A function to calculate the mortgage
function calcMortgage() {
    var principal = document.getElementById ("principal").value;

    let interest = document.getElementById("annualRate").value;

    let mortgagePeriod = document.getElementById("mortgagePeriod").value;

    // Validates the user's input
    if (principal === "" || annualRate === "" || mortgagePeriod === "")  {
        alert ("Please input your principal, interest rate, and mortgage period.");
        return;
    
    } // if

    // Calculates the mortgage
    annualRate /= 100;

    monthlyRate = (annualRate / 12) + 1;
    
    monthlyPay = mortgagePeriod * 12;

    let result = Math.pow (monthlyRate, -monthlyPay);

    result--;

    result = monthlyRate / result;

    let total = result * principal;

    // Rounds the total to two decimal places
    total = Math.round (total * 100) / 100;
    
    // Rounds the total further
    total = Math.round (total);

    // Displays the monthly payment to the HTML document
    document.getElementById ("totalMortgage").style.display = "block";
    document.getElementById ("mortgage").innerHTML = total;

} // calculateTip

// Hides the  amount upon loading 
document.getElementById ("totalMortgage").style.display = "none";
document.getElementById ("each").style.display = "none";

/* When a user clicks the 'Calculate' button, the calculateTip function
is called */
document.getElementById ("calculate").onclick = function () {
    calcMortgage ();
};
