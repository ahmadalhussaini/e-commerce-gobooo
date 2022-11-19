const nav = document.querySelector(".nav");
function menuBar() {
  nav.classList.toggle("nav-bar-open");
}

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

var modal2 = document.getElementById("Modal-Register");

var BtnRegister = document.getElementById("Btn-Register");

var span2 = document.getElementById("close-Register");

var Register = document.getElementById("Register");

BtnRegister.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

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
