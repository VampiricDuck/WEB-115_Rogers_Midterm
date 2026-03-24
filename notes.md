STEP 2: Create a JavaScript application that will display an amortization schedule. 




Files:
index.html: The main HTML page
amortizationCalculator.js: The JavaScript file (linked in the HTML)
HTML Requirements:
Display your name, email, and the current date using <p> tags.
Include a button (id="Button1") that triggers the amortization calculation when clicked.
Use <div> elements to display results or use <table> elements.
Functionality
When the button is clicked, respond based on the following information taken from the user:

1. User Input (prompt() or form elements)
Initial Loan amount (numeric, no commas)
Down payment AS A PERCENTAGE.
Loan term in years (must be 15 or 30; otherwise, alert the user and exit)
THEN, do:

2.Initial Calculations:

Principal Loan Amount = Loan Amount - Down Payment
Fixed Interest Rate: 5.75% annually
Monthly Payment starter code:
let monthlyPayment = ((monthlyInterestRate * principalLoanAmount) / (1 - Math.pow(1 + monthlyInterestRate, -totalMonths))).toFixed(2);

Total Interest Paid = (Monthly Payment × Total Months) - Principal Loan Amount
Total Loan Cost = Principal Loan Amount + Total Interest
3.Display Results:

Loan term (years)
Annual Interest rate (5.75%)
Monthly Interest rate (not required for display, but required for calculations in the loop) = Annual Interest Rate divided by 12. (There are 12 months in a year)
Principal loan amount (after down payment)
Total interest paid
Total loan cost
Monthly payment
IN THE Amortization Schedule: Each month’s
Monthly Payment amount (displaying this is optional)
Interest paid (when iterating through the loop, divide the annual interest rate of 5.75% by 12 to get the monthly interest rate. (e.g. 0.0575/12)
To get Interest Paid, multiply the Remaining Loan Balance by the Monthly Interest Rate.
Principal paid = Monthly Payment - Interest Paid
Remaining loan balance IS EQUAL TO
Remaining Loan Balance of current month - Principal Paid. (zeroes out by the final payment)
The remaining loan balance is then used in the next month to calculate Interest Paid.
Formatting & Output:

Format all monetary values as USD (e.g., $1,234.56). Commas optional.
Append results dynamically to the page using .innerHTML within <div> elements.
Print "This ends the Amortization Calculator..." when the balance reaches zero.
Additional Requirements
Use a loop (for, while, or do-while) to iterate through the payment schedule.
Use .toFixed(2) for precise decimal formatting.
Use if conditions and try catch blocks to validate inputs and handle invalid loan terms.




example GOAL:
amortization.png
SKIPPING TO END
amortization2end.png










Deliverables:

When your work is complete you must upload your file to a GitHub Repo titled WEB-115_LastName_Midterm

Finally, you must provide working "clickable" link to your application on hosted via GitHub Pages. Happy Coding!!!