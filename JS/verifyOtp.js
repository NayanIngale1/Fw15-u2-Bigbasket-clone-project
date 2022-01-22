document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();
  var otp = document.querySelector("#otp").value;
  if (otp == 1234) {
    cartArr = [];
    localStorage.setItem("cartData", JSON.stringify(cartArr));
    window.location.href = "success.html";
  } else {
    alert("OTP not matched");
  }
});
