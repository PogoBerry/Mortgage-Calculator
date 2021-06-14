// A function to calculate the mortgage
function calcMortgage() {
    let principal = document.getElementById ("principal").value;

    let annualRate = document.getElementById("annualRate").value;

    let mortgagePeriod = document.getElementById("mortgagePeriod").value;

    /* Validates the user's input */
    if (principal === "" || annualRate === "" || mortgagePeriod === "")  {
        alert ("Please input your principal, interest rate, and mortgage period.");
        return;
    
    } // if

    /* Checks for non-numerical characters such as commas in the principal
    user input */
    if (typeof principal === 'string') {
        principal = parseInt (principal.replace(/\D/g, ""));
    
    } // if

    annualRate /= 100;
  
    let monthlyRate = (annualRate / 12);
    newMonthlyRate = parseFloat (monthlyRate.toFixed (4));
    
    monthlyPayNum = mortgagePeriod * 12;
  
    plusOne = newMonthlyRate++;
  
    let result = Math.pow (newMonthlyRate, -monthlyPayNum);
    
    result = 1 - result;
  
    result = parseFloat (result.toFixed (4));
  
    total = (monthlyRate / result) * principal;
  
    total = parseFloat (total.toFixed ());
  
    // Displays the monthly payment to the HTML document
    document.getElementById ("totalMortgage").style.display = "block";
    document.getElementById ("mortgage").innerHTML = total;
	document.getElementById ("mortgage").style.display = "inline";

} // calcMortgage

// Hides the  amount upon loading 
document.getElementById ("mortgage").style.display = "none";
/*document.getElementById ("monthly").style.display = "none";*/

/* When a user clicks the 'Calculate' button, the calculateTip function
is called */
document.getElementById ("calculate").onclick = function () {
    calcMortgage ();
};
