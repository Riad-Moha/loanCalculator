//Selecting Elements
const form = document.querySelector('form');
const loadingImg = document.querySelector('.loading-img');
const resultat = document.querySelector('.resultat');

// Add event listener to the form
form.addEventListener('submit',loadingImgFun);

// Display the loading image and using setTimeout method

function loadingImgFun(e) {
  e.preventDefault();
  loadingImg.style.display = 'block';
  resultat.style.display = 'none';
  setTimeout(loanFun, 2000);
}
function loanFun() {

  //Selecting elements
  const loanAmount = document.querySelector('.loan-amount');
  const interests = document.querySelector('.interest');
  const paymentPeriod = document.querySelector('.payment');
  const monthlyPayment = document.querySelector('.monthly-payment')
  const totalPayment = document.querySelector('.total-payment');
  const totalInterest = document.querySelector('.total-interest');

  
  resultat.style.display = "block";
  loadingImg.style.display = "none";


  var principal = loanAmount.value;
  var interest = interests.value / 100 / 12;
  var payments = paymentPeriod.value * 12;

  // Compute the monthly payments
  var x = Math.pow(1 + interest, payments);
  var monthly = (principal * x * interest) / (x-1);

  // Checking if the result is a finite number
  if (!isNaN(monthly) && 
      (monthly != Number.POSITIVE_INFINITY) &&
      (monthly != Number.NEGATIVE_INFINITY)) {
      monthlyPayment.value = (monthly).toFixed(2);
      totalPayment.value = (monthly * payments).toFixed(2);
      totalInterest.value = ((monthly * payments) - principal).toFixed(2);
  }
  //if the inputs are not valid
  else {
    const card = document.querySelector('.card');
    const header3 = document.querySelector('h3');
    

      monthlyPayment.value = "";
      totalPayment.value = "";
      totalInterest.value = "";
      const divEle = document.createElement('div');
      divEle.appendChild(document.createTextNode("Veuillez entrer des valeurs valides"));
      divEle.className = 'divEle bg-danger text-center text-white p-2';
      card.insertBefore(divEle, header3);
      setTimeout(function() {
        divEle.remove();
      }, 2000)
      

  }

}



