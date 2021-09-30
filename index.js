const dateOfBirth = document.querySelector("#date-of-birth");

const luckyNumber = document.querySelector("#lucky-number");

const checkForm = document.querySelector("#check-form");

const displayText = document.querySelector("#display-text");

checkForm.addEventListener("submit", checkBirthDateIsLucky);

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    displayText.innerHTML = "🤩 Your Birthday is lucky.. 🔥💥";
  } else {
    displayText.innerHTML = "😢 Your Birthday is not lucky.. 🥺";
  }
}

function checkBirthDateIsLucky(e) {
  e.preventDefault();
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValues(sum, luckyNumber.value);
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return sum;
}
