document.querySelector("form").addEventListener("submit", formSubmit);
userDataBase = JSON.parse(localStorage.getItem("bbuserDatabase")) || [];
var userSuccess = false;

function formSubmit(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var mobile = document.querySelector("#mobile").value;
  var password = document.querySelector("#password").value;

  var userData = {
    userName: name,
    userEmail: email,
    userMob: mobile,
    userPass: password,
  };
  userDataBase.push(userData);
  // console.log(userDataBase);
  localStorage.setItem("bbuserDatabase", JSON.stringify(userDataBase));
  alert("Congratulation! Account Created Successfully. ");
  window.location.href = "bblogin.html";
}
