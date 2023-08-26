// function to toggle responsive navigation menu
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
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelectorAll(".btn-submit");
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const userAgreement = document.getElementById("checkbox1");

//DOM Elements errors
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");
const errorbzzirthdate = document.getElementById("errorBirthdate");
const errorQuantity = document.getElementById("errorQuantity");
const errorLocation = document.getElementById("errorLocation");
const errorUserAgreement = document.getElementById("errorCheckbox1");

// launch modal event
const modalBtn = document.querySelector(".modal-btn");
modalBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
const closeModalBtn = document.querySelector('.close');
closeModalBtn.addEventListener("click", closeModal);


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// modal form submit
btnSubmit.forEach((btn) => btn.addEventListener("click", (event) => {
  event.preventDefault();
  checkForm();
}));

// Show modal submit text
function submitSuccess() {
  // Clear existing modal content
  modalContent.innerHTML = '';

  // Create a new div for the success message
  const newDiv = document.createElement("div");
  newDiv.id = "thanks";

  // Create a paragraph for the thank you message
  const thanksMessage = document.createElement("p");
  thanksMessage.innerText = "Merci pour votre inscription";
  newDiv.appendChild(thanksMessage);

  // Creating a button to close the modal and reload the page
  const btnClose = document.createElement("input");
  btnClose.value = "Fermer";
  btnClose.type = "button";
  btnClose.classList.add("btn-submit");
  btnClose.addEventListener("click", function() {
    closeModal();
    location.reload(); // Reload the page
  });
  newDiv.appendChild(btnClose);

  // Appending the new div to the modal content
  modalContent.appendChild(newDiv);
}


// modal form submit
function checkForm() {
  event.preventDefault();
  let formIsValid = true;

  // modal error first name
  if (!firstName.value || firstName.value === "" || firstName.value.length < 2) {
    errorFirstName.innerText = "Le prénom est invalide";
    firstName.style.borderColor = "red";
    formIsValid = false;
  } else {
    errorFirstName.innerText = "";
    firstName.style.borderColor = "transparent";
  }

  // modal error last name
  if (
    lastName.value == undefined ||
    lastName.value == "" ||
    lastName.value.length < 2
  ) {
    errorLastName.innerText = "Le nom de famille est invalide.";
    lastName.style.borderColor = "red";
    formIsValid = false;
  } else {
    errorLastName.innerText = "";
    lastName.style.borderColor = "transparent";
  }

  // form error email
  let validateEmailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
  let isValidEmail = validateEmailRegex.test(email.value);

  if (!isValidEmail) {
    errorEmail.innerText = "Un email valide doit être saisi.";
    email.style.borderColor = "red";
    formIsValid = false;
  } else {
    errorEmail.innerText = "";
    email.style.borderColor = "transparent";
  }

  // form error quantity
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  let quantityDetector = isNumeric(quantity.value);
  if (!quantityDetector) {
    errorQuantity.innerText = "La valeur saisie doit être un chiffre.";
    quantity.style.borderColor = "red";
    formIsValid = false;
  } else {
    errorQuantity.innerText = "";
    quantity.style.borderColor = "transparent";
  }

  // form error missing birthdate
  // checking if null
  console.log(birthdate.value);
 let birthdateChecker = birthdate.value;
  console.log(birthdateChecker);
  if (!birthdateChecker ) {
    errorbirthdate.innerText = "Une date d'anniverssaire doit être choisie."
    formIsValid = false;
  } else {
    errorbirthdate.innerText = "";
  }

// form error location
let selectedLocation = document.querySelector('input[name="location"]:checked');
if (selectedLocation === null) {
  errorLocation.innerText = "Une valeur doit être sélectionnée.";
  formIsValid = false;
} else {
  errorLocation.innerText = "";
}

  // form error user agreement
  let UserAgreementGranted = userAgreement.checked;
  if (!UserAgreementGranted) {
    errorUserAgreement.innerText = "La case des conditions générales doit être cochée.";
    formIsValid = false;
  } else {
    errorUserAgreement.innerText = "";
  }

  if (formIsValid) {
    submitSuccess();
  }
}
