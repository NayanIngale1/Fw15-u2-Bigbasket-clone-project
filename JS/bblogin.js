document.querySelector("form").addEventListener("submit", signIn);
var bbUser = JSON.parse(localStorage.getItem("bbuserDatabase")) || [];

function signIn(event) {
  event.preventDefault();
  var user = document.querySelector("#email").value;
  var pass = document.querySelector("#password").value;

  console.log(bbUser.length);

  var logfail = 0;
  for (var i = 0; i < bbUser.length; i++) {
    
    if (bbUser[i].userEmail == user && bbUser[i].userPass == pass) {
      window.location.href = "index.html";
      alert("Use login success");
    } else {
      logfail++;
    }
  }

  if (logfail == bbUser.length) {
    alert("User Login Failed! Try Again.");
  }
}
