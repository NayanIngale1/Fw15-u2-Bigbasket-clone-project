console.log("Hello");

document.querySelector("#read-more-btn").addEventListener("click", function () {
  document.querySelector("#more-text").style.display = "inline";
  document.querySelector("#read-more-btn").style.display = "none";
});

document.querySelector("#basket-cart").addEventListener("click", function () {
  window.location.href = "basketcart.html";
});

function newFunction() {
  $(".carousel").carousel({
    interval: 1000,
  });
}

var slideBtn = document.getElementsByClassName("slide-btn");
var nayan = document.getElementsByClassName("card");
var l = 0;
slideBtn[1].addEventListener("click", function (e) {
  l++;

  for (var i of nayan) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-30vw";
    }
    if (l == 2) {
      i.style.left = "-50vwpx";
    }
    if (l == 3) {
      i.style.left = "-70vwpx";
    }
    if (l == 4) {
      i.style.left = "-90vw";
    }
    if (l > 4) {
      l = 4;
    }
    if (l == nayan.length) {
      l = 0;
    }
  }
});

slideBtn[0].addEventListener("click", function () {
  l--;
  for (var i of nayan) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-30vw";
    }
    if (l == 2) {
      i.style.left = "-50vw";
    }
    if (l == 3) {
      i.style.left = "-90vw";
    }
    if (l < 0) {
      l = 0;
    }
  }
});

var cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
var FruitVegArr = JSON.parse(localStorage.getItem("vegData"));
var OneProduct = [];

if (!FruitVegArr) {
  window.location.href = "Project-All-Data.html";
}

document.getElementById(
  "basket-items"
).innerHTML = `My Basket <br><b> ${cartArr.length} Items.</b>`;

displayProduct(FruitVegArr);
function displayProduct(FruitVegArr) {
  document.querySelector("#cardSlider").innerHTML = "";

  FruitVegArr.map(function (element, _index) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");

    for (var i = 0; i < cartArr.length; i++) {
      if (element.productName == cartArr[i].productName) {
        card.style.backgroundColor = "rgba(222, 184, 135, 0.212)";
      }
    }

    var discount = document.createElement("div");
    discount.setAttribute("class", "discount");

    var getOff = document.createElement("p");
    getOff.setAttribute("class", "get-off");
    getOff.textContent = `GET ${element.OFF} % OFF`;

    var redDot = document.createElement("div");
    redDot.setAttribute("class", "red-dot");

    var prodimg = document.createElement("div");
    prodimg.setAttribute("class", "product-photo");

    var prod = document.createElement("img");
    prod.setAttribute("class", "product-image");
    prod.setAttribute("src", element.image);

    prod.addEventListener("click", function () {
      // console.log(element);
      OneProduct.push(element);
      // console.log(OneProduct);
      localStorage.setItem("productDetail", JSON.stringify(OneProduct));
      window.location.href = "ProductDetails.html";
    });

    var vegBorder = document.createElement("div");
    vegBorder.setAttribute("class", "veg-tag-border");

    var vegSymbol = document.createElement("div");
    vegSymbol.setAttribute("class", "veg-color-tag");

    var brand = document.createElement("p");
    brand.setAttribute("class", "brandName");
    brand.textContent = element.Brand;

    var prodName = document.createElement("p");
    prodName.setAttribute("class", "product-name");
    prodName.textContent = element.productName;

    var note = document.createElement("div");
    note.textContent = "price for 1Kg";
    note.setAttribute("class", "note");

    var priceDetail = document.createElement("div");
    priceDetail.setAttribute("class", "qty-mrp-container");

    var price = document.createElement("div");
    price.setAttribute("class", "mrp-container");

    var mrpName = document.createElement("p");
    mrpName.setAttribute("class", "mrp-border");
    mrpName.textContent = "MRP:";

    var strikePrc = document.createElement("p");
    strikePrc.setAttribute("class", "strick-price");
    strikePrc.textContent = "Rs" + element.StrikePrice;

    var prodPrc = document.createElement("p");
    prodPrc.setAttribute("class", "product-price");
    prodPrc.textContent = "Rs " + element.productprice;

    var stdDelivery = document.createElement("div");
    stdDelivery.setAttribute("class", "standart-delivery-box");

    var truckBox = document.createElement("div");
    truckBox.setAttribute("class", "truckBox");

    var deliveryDate = document.createElement("p");
    deliveryDate.setAttribute("class", "delivery-date");
    deliveryDate.textContent = element.Date;

    var truck = document.createElement("img");
    truck.setAttribute("class", "delivery-truck");
    truck.setAttribute(
      "src",
      "https://www.bbassets.com/static/v2498/custPage/build/content/img/standard-del.svg"
    );

    var qtyDiv = document.createElement("div");
    qtyDiv.setAttribute("class", "qty-div");

    var qtyName = document.createElement("p");
    qtyName.setAttribute("class", "qty-border");
    qtyName.textContent = "QTY";

    var qtyBox = document.createElement("div");
    qtyBox.setAttribute("class", "qty-box");

    var takeQty = document.createElement("input");
    takeQty.setAttribute("class", "qty-input");
    takeQty.type = "text";

    var addCartDiv = document.createElement("div");
    addCartDiv.setAttribute("class", "add-to-cart-box");

    var cartBtn = document.createElement("button");
    cartBtn.textContent = "Add to cart";
    cartBtn.setAttribute("class", "add-to-cart-button");
    cartBtn.addEventListener("click", function () {
      addtocart(takeQty.value, element);
    });

    qtyBox.append(qtyName, takeQty);

    addCartDiv.append(cartBtn);
    qtyDiv.append(qtyBox, addCartDiv);
    truckBox.append(truck);
    stdDelivery.append(truckBox, deliveryDate);
    price.append(mrpName, strikePrc, prodPrc);
    priceDetail.append(price, stdDelivery, qtyDiv);
    vegBorder.append(vegSymbol);
    prodimg.append(prod);
    discount.append(getOff, redDot);
    card.append(
      discount,
      prodimg,
      vegBorder,
      brand,
      prodName,
      note,
      priceDetail
    );
    document.querySelector("#cardSlider").append(card);
  });
}

function addtocart(inputqty, element) {
  var qty = inputqty;
  var total = inputqty * element.productprice;
  // console.log(typeof qty)
  if (qty == "") {
    alert("please Enter Some quantity ..");
    return;
  }

  var object1 = {
    OFF: element.OFF,
    Brand: element.Brand,
    Date: element.Date,
    Link: element.image,
    StrikePrice: element.StrikePrice,
    productName: element.productName,
    productprice: element.productprice,
    quantity: qty,
    totalPrice: total,
  };
  cartArr.push(object1);
  window.location.reload();
  localStorage.setItem("cartData", JSON.stringify(cartArr));
  // console.log(cart);
  alert(
    `Your ${object1.productName} successfully added with ${object1.quantity} quantity. Thank You !`
  );
}
