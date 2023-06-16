function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const btnSubmit = document.querySelectorAll(".btn-submit");

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
btnSubmit.forEach((btn) => btn.addEventListener("click", submitSuccess));
// modal submit text 

//show modal submit text
const modalContent = document.querySelector(".modal-body");
function submitSuccess() {
  modalContent.innerHTML = "Merci pour votre inscription";
  btnSubmit.textContent = "Fermer";
};



