//functionality to open,close navbar in tablets and mobile
const nav = document.querySelector(".nav");
function menuBar() {
  nav.classList.toggle("nav-bar-open");
}
//functionality to open,close model login
var modal = document.getElementById("Modal-login");

var Btnlogin = document.getElementById("Btn-login");

var span = document.getElementById("close-login");

Btnlogin.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//functionality to open,close model reigister
var modalRegister = document.getElementById("Modal-Register");

var BtnRegister = document.getElementById("Btn-Register");

var spanregister = document.getElementById("close-Register");

var Register = document.getElementById("Register");

BtnRegister.onclick = function () {
  modalRegister.style.display = "block";
};

spanregister.onclick = function () {
  modalRegister.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalRegister) {
    modalRegister.style.display = "none";
  }
};
//functionality to send masseg match or not match
document.getElementById("txtConfirmPassword").onkeyup = function () {
  var password = document.getElementById("txtPassword").value;
  var confirmPassword = document.getElementById("txtConfirmPassword").value;
  if (password != confirmPassword) {
    document.getElementById("Passwordsnotmatch").style.display = "block";
    document.getElementById("Passwordsmatch").style.display = "none";
  } else {
    document.getElementById("Passwordsnotmatch").style.display = "none";
    document.getElementById("Passwordsmatch").style.display = "block";
  }
};
