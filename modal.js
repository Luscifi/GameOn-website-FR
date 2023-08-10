function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalContent = document.querySelector(".modal-body");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const btnSubmit = document.querySelectorAll(".btn-submit");
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const userAgreement = document.getElementById("checkbox1");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");
const errorQuantity = document.getElementById("errorQuantity");
const errorLocation = document.getElementById("errorLocation");
const errorUserAgreement = document.getElementById("errorCheckbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
close.forEach((span) => span.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// modal form submit
btnSubmit.forEach((btn) => btn.addEventListener("click", checkForm));

function checkForm() {
  event.preventDefault();
  let error = false;

  // modal error first name
  //checking if undefined, empty, less than 2 characters
  if (
    firstName.value == undefined ||
    firstName.value == "" ||
    firstName.value.length < 2
  ) {
    errorFirstName.innerText = "Le prénom est invalide";
    firstName.style.borderColor = "red";
    error = true;
  } else {
    errorFirstName.innerText = "";
    firstName.style.borderColor = "transparent";
  }

  // modal error last name
  //checking if undefined, empty, less than 2 characters
  if (
    lastName.value == undefined ||
    lastName.value == "" ||
    lastName.value.length < 2
  ) {
    errorLastName.innerText = "Le nom de famille est invalide.";
    lastName.style.borderColor = "red";
  }

  // form error email
  // checking against regex
  let validateEmailRegex = new RegExp(
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim
  );
  let isValidEmail = validateEmailRegex.test(email);

  if (!isValidEmail) {
    errorEmail.innerText = "Un email valide doit être saisi.";
    email.style.borderColor = "red";
  }

  // form error quantity
  //checking if an int
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  let quantityDetector = isNumeric(quantity.value);
  console.log(quantityDetector);
  if (!quantityDetector) {
    errorQuantity.innerText = "La valeur saisie doit être un chiffre.";
    quantity.style.borderColor = "red";
  }

  // form error missing birthdate
  // checking if null
  console.log(birthdate.value);
 let birthdateChecker = birthdate.value;
  console.log(birthdateChecker);
  if (!birthdateChecker ) {
    errorbirthdate.innerText = "Une date d'anniverssaire doit être choisie."
  }

  // form error location
  //checking if checked
  let locationDetector = document.querySelector('input[name="location"]:checked');
  if (locationDetector === null) {
    errorLocation.innerText = "Une valeur doit être sélectionnée.";
  }

  // form error user agreement
  //checking if checked
  let UserAgreementGranted = userAgreement.checked;
  if (!UserAgreementGranted) {
    errorUserAgreement.innerText =
      "La case des conditions générales doit être cochée.";
  }
  return error;
}

//show modal submit text
function submitSuccess() {
  modalContent.innerHTML = "Merci pour votre inscription";
  const btnClose = document.createElement("input");
  btnClose.value = "Fermer";
  btnClose.type = "submit";
  btnClose.classList.add("btn-submit");
  modalContent.appendChild(btnClose);
}
