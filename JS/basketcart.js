var arr2 = [];
var savingSum = 0;

var cartData = JSON.parse(localStorage.getItem("cartData"))||[];




document.getElementById(
  "basket-items"
).innerHTML = `My Basket <br><b> ${cartData.length} Items.</b>`;

showCart(cartData);
function showCart(cartData) {
  
  document.querySelector("tbody").textContent = "";

  cartData.map((item, index) => {
    // ar2r.push((item.StrikePrice-item.productprice)*item.quantity)
    var tr = document.createElement("tr");

    var td3 = document.createElement("td");
    var p = document.createElement("p");
    p.textContent = item.Brand;
    var p2 = document.createElement("p");
    p2.textContent = item.productName;

    td3.append(p, p2);

    var span = document.createElement("span");
    span.textContent = item.quantity;

    var td4 = document.createElement("td");
    var div = document.createElement("div");
    div.setAttribute("id", "quantity");
    var button1 = document.createElement("button");
    button1.setAttribute("class", "btn btn-outline-success");
    button1.setAttribute("id", "buttonN");
    button1.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i>';
    var kkk = (item.StrikePrice - item.productprice) * span.textContent;

    button1.addEventListener("click", function () {
      changeQuantity(-1, span.textContent);
    });
    // ----------------------------------------------saving show
    var td9 = document.createElement("td");
    td9.textContent = roundOff(kkk, 2);
    savingSum = savingSum + Number(td9.textContent);
    // updateSaving( td9.textContent)

    var button2 = document.createElement("button");
    button2.setAttribute("class", "btn btn-outline-success");
    button2.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';

    button2.addEventListener("click", function () {
      changeQuantity(1, span.textContent);
    });
    div.append(button1, span, button2);

    td4.append(div);

    var td5 = document.createElement("td");
    td5.setAttribute("id", "td5");

    // td5.textContent = item.totalPrice//total price
    td5.textContent = roundOff(item.quantity * item.productprice,2); //total price

    // showPrice(item.quantity*item.productprice)

    var td6 = document.createElement("td");
    var rsDiv = document.createElement("div");
    var p3 = document.createElement("p");
    var p3span = document.createElement("span");
    rsDiv.style.display = "flex";
    p3span.textContent = "Rs.";
    p3.textContent = item.productprice;
    rsDiv.append(p3span, p3);

    td6.append(rsDiv);

    function changeQuantity(k, q) {
      if (k == -1) {
        span.textContent = Number(span.textContent) + -1;
        td5.textContent = (td5.textContent - p3.textContent).toFixed(2);
        item.totalPrice = Number(td5.textContent);

        // item.totalPrice = Number(td5.textContent)
        if (span.textContent == 0) {
          button1.disabled = "true";

          location.reload();
          // item.totalPrice = item.productprice
        }

        td9.textContent = roundOff(
          (item.StrikePrice - item.productprice) * span.textContent,
          2
        );
        // console.log("update saving -1", td9.textContent);

        updateSaving(-(item.StrikePrice - item.productprice));
      }
      if (k == 1) {
        span.textContent = Number(span.textContent) + 1;
        td5.textContent = (p3.textContent * span.textContent).toFixed(2);
        // console.log(Number(td5.textContent), ';;;;;;;')

        item.totalPrice = Number(td5.textContent);
        td9.textContent = roundOff(
          (item.StrikePrice - item.productprice) * span.textContent,
          2
        );
        // console.log("update saving 1", td9.textContent);
        updateSaving(item.StrikePrice - item.productprice);
      }
      item.totalPrice = Number(td5.textContent);
      var total = cartData.reduce((accumalator, cv) => {
        return accumalator + cv.totalPrice;
      }, 0);
      // console.log(total)
      showPrice(roundOff(total, 2));
      // updateSaving(updateSaving)
    }
    var td8 = document.createElement("td");
    var button = document.createElement("button");
    button.addEventListener("click", function () {
      deleteItem(index);
    });
    button.setAttribute("class", "btn btn-outline-danger");
    button.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    td8.append(button);

    td9.setAttribute("id", "td9");

    td9.style.color = "red";
    var td2 = document.createElement("td");
    td2.style.textDecoration = "line-through";
    td2.setAttribute("id", "td2");
    td2.textContent = item.StrikePrice;
    // ------------------------------------------append to table------------------------------------------------------------

    function deleteItem(index) {
      cartData.splice(index, 1);
      localStorage.setItem("cartData", JSON.stringify(cartData));
      // td5.textContent = item.totalPrice
      showCart(cartData);

      location.reload();

      // td5.textContent = item.price*quantity
    }
    tr.append(td3, td2, td6, td4, td5, td9, td8);
    document.querySelector("tbody").append(tr);
    arr2.push(cartData[index].totalPrice);
    // console.log(item.productprice * item.quantity, "dddd")
  });
}
// console.log(cartData, "fghnjmuygtvbhjn")
var total = cartData.reduce((accumalator, cv) => {
  return accumalator + cv.productprice * cv.quantity;
}, 0);

total = roundOff(total, 2);

// console.log(Object.keys(cartData).length)
var h1 = document.createElement("h1");
h1.textContent = `Your Basket (${Object.keys(cartData).length} items)`;
document.querySelector("#cartLength").append(h1);

var chekOutButtnDiv = document.createElement("div");
chekOutButtnDiv.setAttribute("id", "chekOutButtnDiv");
var checkout = document.createElement("button");
// checkout.textContent="CHECKOUT"
checkout.addEventListener("click", function () {
  window.location.href = "checkout.html";
  // ------------------------------------------TOTAL AMOUNT LOCAL STORAGE-----------------------------------------------------------------------------------------------------------------

  localStorage.setItem("totalAmount", total);
  // ------------------------------------------------------------------------------------------------------------------------------------------------------
});
checkout.innerHTML =
  "CHECKOUT" +
  " " +
  '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>';

var hr = document.createElement("hr");
var span = document.createElement("H3");
span.style.fontWeight = "bold";
var pchkout2 = document.createElement("p");
pchkout2.textContent = `* For this order: Accepted food coupon is Rs.${total.toFixed(
  2
)}`;

var pchkout3 = document.createElement("p");
pchkout3.textContent = `** Actual delivery charges computed at checkout time`;

span.textContent = `Rs.${total.toFixed(2)}`;

function showPrice(val) {
  // val = roundOff(val,2)
  span.textContent = `Rs.${val}`;
  pchkout2.textContent = `* For this order: Accepted food coupon is Rs.${val}`;

  checkout.innerHTML =
    "CHECKOUT" +
    " " +
    '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>';

  checkout.addEventListener("click", function () {
    window.location.href = "checkout.html";
    localStorage.setItem("totalAmount", val);
  });
}
document.querySelector("#showingTotal").append(span); //totalprice

chekOutButtnDiv.append(checkout);
document
  .querySelector("#checkOutSection")
  .append(pchkout2, chekOutButtnDiv, pchkout3);

document.querySelector("#show-saving").textContent = roundOff(savingSum,2);
function updateSaving(k) {
  document.querySelector("#show-saving").textContent = roundOff(
    Number(k) + savingSum,
    2
  );
  savingSum = Number(document.querySelector("#show-saving").textContent);
}


// ----------------------------------if cart is already empty ----------------------------
if (cartData.length == 0) {
  document.querySelector("#clrCart").style.visibility = "hidden";
  document.querySelector("#card").style.display = "none";
  document.querySelector("#table").style.display = "none";
  document.querySelector("#hrTag").style.display = "none";
  h1.textContent = `Your Basket is Empty😒`;
  document.querySelector("#cartLength").append(h1);
  document.getElementById(
    "basket-items"
  ).innerHTML = `My Basket <br><b> ${cartData.length} Items.</b>`;
}


function clearTheCart() {
  // e.preventDefault()
  let confirmAction = confirm("Are you sure want to clear the cart");
  if (confirmAction) {
    localStorage.removeItem("cartData");
    cartData = [];
    showCart(cartData);
    span.textContent = "Rs." + 0;
    document.querySelector("#show-saving").textContent = 0;

    document.querySelector("#clrCart").style.visibility = "hidden";
    document.querySelector("#card").style.display = "none";
    document.querySelector("#table").style.display = "none";
    document.querySelector("#hrTag").style.display = "none";
    h1.textContent = `Your Basket is Empty😒`;
    document.querySelector("#cartLength").append(h1);
    document.getElementById(
      "basket-items"
    ).innerHTML = `My Basket <br><b> ${cartData.length} Items.</b>`;
    // window.location.reload()
    // console.log
  }
}
function roundOff(value, round) {
  return parseInt(value * 10 ** (round + 1)) -
    parseInt(value * 10 ** round) * 10 >
    4
    ? parseFloat(
        parseInt((value + parseFloat(1 / 10 ** round)) * 10 ** round)
      ) /
        10 ** round
    : parseFloat(parseInt(value * 10 ** round)) / 10 ** round;
}
