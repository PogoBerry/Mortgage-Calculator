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
    let annualRate = 4.32;
    let principal = 265000;
    let mortgagePeriod = 15;
    
    annualRate /= 100;
  
    let monthlyRate = (annualRate / 12);
    newMonthlyRate = parseFloat (monthlyRate.toFixed (4));
    
    monthlyPayNum = mortgagePeriod * 12;
  
    plusOne = newMonthlyRate++;
  
    let result = Math.pow (newMonthlyRate, -monthlyPayNum);
    
    result = 1 - result;
  
    result = parseFloat (result.toFixed (4));
  
    total = monthlyRate / result;
  
    total *= principal;
  
    total = total.toFixed ();
  
    total = parseFloat (total);
    
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
