document.querySelector("#read-more-btn").addEventListener("click", function () {
  document.querySelector("#more-text").style.display = "inline";
  document.querySelector("#read-more-btn").style.display = "none";
});


document.querySelector("#basket-cart").addEventListener("click", function () {
  window.location.href = "basketcart.html";
});
//---------------All Product Photo Start----------//

var image3 = document.createElement("img");
image3.setAttribute("class", "all-product-image-border");
image3.setAttribute(
  "src",
  "https://www.bbassets.com/static/v2498/custPage/build/content/img/standard-del.svg"
);
document.querySelector("#all-product-image-border").append(image3);

//----------------All Product Photo End----------//
var cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
var foodOilAndMasala = JSON.parse(localStorage.getItem("oilMasalaData"));
var OneProduct = [];

document.getElementById(
  "basket-items"
).innerHTML = `My Basket <br><b> ${cartArr.length} Items.</b>`;

document.getElementById(
  "totalItems"
).innerHTML = `(${foodOilAndMasala.length})`;

displayProduct(foodOilAndMasala);
function displayProduct(foodOilAndMasala) {
  document.querySelector("#gridcontainer").innerHTML = "";

  foodOilAndMasala.map(function (element, index) {
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

    //------------------------------Go to Product-Details---start-----------------------//
    prod.addEventListener("click", function () {
      // console.log(element);
      OneProduct.push(element);
      // console.log(OneProduct);
      localStorage.setItem("productDetail", JSON.stringify(OneProduct));
      window.location.href = "ProductDetails.html";
    });
    //------------------------------go toProduct-Details--End-------------------------//
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

    var PriceAsPerQtyPiece = document.createElement("p");
    PriceAsPerQtyPiece.setAttribute("class", "Qty-Piece");
    PriceAsPerQtyPiece.textContent = element.QtyPiece;

    // var note = document.createElement("div")
    // note.textContent = "price for 1Kg"
    // note.setAttribute("class", "note")

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
      priceDetail
    );

    document.querySelector("#gridcontainer").append(card);
  });
}

//---------Brand-Filter-Start-----------------------//

function fresho() {
  var value5 = document.querySelector("#checkbox-fresho").checked;
  console.log(value5);
  if (value5 == true) {
    var fresho_item = foodOilAndMasala.filter(function (element, index) {
      return element.Brand == "Fresho";
    });
    displayProduct(fresho_item);
  } else {
    displayProduct(foodOilAndMasala);
    }
}
function bbcombo() {
  var value6 = document.querySelector("#checkbox-bb-combo").checked;
  if (value6 == true) {
    var fresho_item1 = foodOilAndMasala.filter(function (element, index) {
      return element.Brand == "BB-Combo";
    });
    displayProduct(fresho_item1);
  } else {
    displayProduct(foodOilAndMasala);
  }
}
//--------------Brand-Filter-End-------------------------//

//--------------Price-Filter-Start----------------------//

function LessthanRs20() {
  var Rs = document.querySelector("#LessthanRs20").checked;
  if (Rs == true) {
    var lessthanRs20 = foodOilAndMasala.filter(function (element) {
      return element.productprice <= 20;
    });
    displayProduct(lessthanRs20);
  } else {
    displayProduct(foodOilAndMasala);
  }
}

function BetweenRs21toRs50() {
  var Rs = document.querySelector("#BetweenRs21toRs50").checked;
  if (Rs == true) {
    var BetweenRs21toRs50 = foodOilAndMasala.filter(function (element) {
      if (element.productprice > 20 && element.productprice <= 50) {
        return element.productprice;
      }
    });
    displayProduct(BetweenRs21toRs50);
  } else {
    displayProduct(foodOilAndMasala);
  }
}

function BetweenRs51toRs100() {
  var Rs = document.querySelector("#BetweenRs51toRs100").checked;
  if (Rs == true) {
    var BetweenRs51toRs100 = foodOilAndMasala.filter(function (element) {
      if (element.productprice > 50 && element.productprice <= 100) {
        return element.productprice;
      }
    });
    displayProduct(BetweenRs51toRs100);
  } else {
    displayProduct(foodOilAndMasala);
    }


}

function BetweenRs101toRs200() {
  var Rs = document.querySelector("#BetweenRs101toRs200").checked;
  if (Rs == true) {
    var BetweenRs101toRs200 = foodOilAndMasala.filter(function (element) {
      if (element.productprice > 100 && element.productprice <= 200) {
        return element.productprice;
      }
    });
    displayProduct(BetweenRs101toRs200);
  } else {
    displayProduct(foodOilAndMasala);
  }
}

function BetweenRs201toRs500() {
  var Rs = document.querySelector("#BetweenRs201toRs500").checked;
  if (Rs == true) {
    var BetweenRs201toRs500 = foodOilAndMasala.filter(function (element) {
      if (element.productprice > 200 && element.productprice <= 500) {
        return element.productprice;
      }
    });
    displayProduct(BetweenRs201toRs500);
  } else {
    displayProduct(foodOilAndMasala);
  }
}

//--------------Price-Filter-End----------------------//

//---------------Discount-Filter-Start----------------//

function Between_15_25() {
  var between_15_25 = document.querySelector("#Between_15_25").checked;
  if (between_15_25 == true) {
    var Between_15_25 = foodOilAndMasala.filter(function (element) {
      if (element.OFF >= 15 && element.OFF <= 25) {
        return element.OFF;
      }
    });
    displayProduct(Between_15_25);
  } else {
    displayProduct(foodOilAndMasala);
  }
}

function Morethan25() {
  var morethan25 = document.querySelector("#Morethan25").checked;
  if (morethan25 == true) {
    var Morethan25 = foodOilAndMasala.filter(function (element) {
      return element.OFF > 25;
    });
    displayProduct(Morethan25);
  } else {
    displayProduct(foodOilAndMasala);
  }
}

//---------------Discount-Filter-End----------------//

// -------------------sorting--------------------------
function sorting() {
  var value2 = document.querySelector("#select1").value;
  console.log(value2);
  if (value2 == "low") {
    foodOilAndMasala.sort(function (a, b) {
      return Number(a.productprice) - Number(b.productprice);
      //category_page(foodOilAndMasala);
    });
    displayProduct(foodOilAndMasala);
  }
  if (value2 == "high") {
    foodOilAndMasala.sort(function (a, b) {
      return Number(b.productprice) - Number(a.productprice);
      //category_page(foodOilAndMasala);
    });
    displayProduct(foodOilAndMasala);
  }
  if (value2 == "char") {
    foodOilAndMasala.sort(function (a, b) {
      if (a.productName < b.productName) return -1;
      if (a.productName > b.productName) return 1;
      return 0;
      //category_page(foodOilAndMasala);
    });
    displayProduct(foodOilAndMasala);
  }
  if (value2 == "savinghigh") {
    foodOilAndMasala.sort(function (a, b) {
      return Number(b.StrikePrice) - Number(a.StrikePrice);
      //category_page(foodOilAndMasala);
    });
    displayProduct(foodOilAndMasala);
  }
  if (value2 == "savinglow") {
    foodOilAndMasala.sort(function (a, b) {
      return Number(a.StrikePrice) - Number(b.StrikePrice);
      //category_page(foodOilAndMasala);
    });
    displayProduct(foodOilAndMasala);
  }
  if (value2 == "offhigh") {
    foodOilAndMasala.sort(function (a, b) {
      return Number(b.OFF) - Number(a.OFF);
    });
    displayProduct(foodOilAndMasala);
  }
}

//   -------------------------add to cart function--------------------------------

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
    Link: element.Link,
    StrikePrice: element.StrikePrice,
    productName: element.productName,
    productprice: element.productprice,
    quantity: qty,
    totalPrice: total,
  };
  cartArr.push(object1);
  window.location.reload();

  localStorage.setItem("cartData", JSON.stringify(cartArr));
  console.log(cartArr);
  alert(
    `Your ${object1.productName} successfully added with ${object1.quantity} quantity. Thank You !`
  );
}
