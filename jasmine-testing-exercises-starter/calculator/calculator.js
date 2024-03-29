window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");

  amount.value = 100000;
  years.value = 10;
  rate.value = 6;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();

  let payment = calculateMonthlyPayment(values);
  updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate / 100) / 12;
  let n = values.years * 12;

  if (p == 0 || i == 0 || n == 0){
    return 0.00;
  }
  
  let compound = 1 + i;

  let pxi = p * i;

  let denominator = compound;

  for (let y = 0; y < n; y++) {
    denominator = denominator * compound;
  }

  denominator = 1 / denominator;
  denominator = 1 - denominator;

  let monthly = pxi / denominator;

  monthly = Math.round(monthly * 100) / 100;

  return(monthly.toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let statement = document.getElementById("monthly-payment");
  statement.innerText = `$${monthly}`;
}
