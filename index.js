// ////////////////////////nav bar /////////////////////////////
let modalId = document.querySelector(".modalNav");
let openBtn = document.querySelector("#openBtn");
let closeBtn = document.querySelector("#closebtn");

function openModal() {
  modalId.classList.add("animOpen");
  modalId.classList.remove("animClose");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline";
}

function closeModal() {
  modalId.classList.remove("animOpen");
  modalId.classList.add("animClose");
  openBtn.style.display = "inline";
  closeBtn.style.display = "none";
}

//open and close the openModal btn using javascript
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    openBtn.style.display = "inline";
  } else {
    openBtn.style.display = "none";
  }
}
var x = window.matchMedia("(max-width: 890px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
