// jshint esversion: 6
let creditCardNumber = document.getElementById('cardNum');
creditCardNumber.addEventListener('keyup', checkForCCType);

// 622126 - 622925,
function checkForCCType() {

  // take the users input (so far), remove spaces, and convert it to a number
  let enteredPrefix = parseInt(creditCardNumber.value.replace(/\s/g, ''));

  checkDiscoverPrefixes(enteredPrefix);
  checkMasterCardPrefixes(enteredPrefix);
  checkVisaPrefix(enteredPrefix);

}

function checkDiscoverPrefixes(prefixToCheck) {

  const discoverPrefixes = [6011, 644, 645, 646, 647, 648, 649, 65];

  discoverPrefixes.some((prefix) => {

    if (prefixToCheck === prefix) {
      document.querySelector('.card-logo').src = 'img/discover.png';
    } else if (prefixToCheck >= 622126 && prefixToCheck <= 622925) {
      document.querySelector('.card-logo').src = 'img/discover.png';
    }
  });
}

function checkMasterCardPrefixes(prefixToCheck) {

  if (prefixToCheck >= 2221 && prefixToCheck <= 2720) {
    document.querySelector('.card-logo').src = 'img/mastercard.png';
  } else if (prefixToCheck >= 51 && prefixToCheck <= 55) {
    document.querySelector('.card-logo').src = 'img/mastercard.png';
  }
}

function checkVisaPrefix(prefixToCheck) {

  if (prefixToCheck === 4) {
    document.querySelector('.card-logo').src = 'img/visa.png';
  }
}
