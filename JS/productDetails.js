var ProductDetails = JSON.parse(localStorage.getItem("productDetail"));
var cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
//   console.log(ProductDetails);

document.getElementById(
  "basket-items"
).innerHTML = `My Basket <br><b> ${cartArr.length} Items.</b>`;

document.querySelector("#basket-cart").addEventListener("click", function () {
  window.location.href = "basketcart.html";
});

Details(ProductDetails);
function Details(ProductDetails) {
  ProductDetails.map(function (element, index) {
    var ProductImage = document.createElement("img");
    ProductImage.setAttribute("class", "Product-Image");
    ProductImage.setAttribute("src", element.image);

    var small = document.createElement("img");
    small.setAttribute("class", "smallpic");
    small.setAttribute("src", element.image);
    //var QtyValue = document.querySelector("#QtyInputBox").value;
    
    document
      .querySelector("#AddToCartButton")
      .addEventListener("click", function () {
        var QtyValue = document.querySelector("#QtyInputBox").value;
        //console.log(QtyValue);
        var totalprice = QtyValue * element.productprice;
        //console.log(totalprice);
        document.querySelector(
          "#Quantity"
        ).innerHTML = `Total Quantity : ${QtyValue}`;
        document.querySelector(
          "#Amount"
        ).innerHTML = `Total Amount : Rs ${totalprice}`;
      });
    document
      .querySelector("#SaveButoon")
      .addEventListener("click", function () {
        var QtyValue = document.querySelector("#QtyInputBox").value;
        var totalprice = QtyValue * element.productprice;
        //   console.log(QtyValue);
        //   console.log(totalprice);
        addtocart(QtyValue, totalprice, element);
      });

    document.querySelector("#Quantity").innerHTML = ` Total Quantity : 0`;
    document.querySelector("#Amount").innerHTML = ` Total Amount : 0`;
    document.querySelector("#DeliveryContent").innerHTML = `${element.Date}`;
    document.querySelector(
      "#TaxContent"
    ).innerHTML = `(Inclusive of all taxes)`;
    document.querySelector(
      "#SavingOff"
    ).innerHTML = `You Save : ${element.OFF} %`;
    document.querySelector(
      "#Price"
    ).innerHTML = `Price : Rs ${element.productprice}`;
    document.querySelector(
      "#StrickPrice"
    ).innerHTML = `Rs ${element.StrikePrice}`;
    document.querySelector("#Mrp").innerHTML = `MRP :`;
    document.querySelector(
      "#BrandProductNameWeight"
    ).innerHTML = `${element.Brand} : ${element.productName} : ${element.QtyPieceForOneElement}`;
    document.querySelector("#BrandBox").innerHTML = element.Brand;
    document
      .querySelector("#imagebox")
      .append(ProductImage, document.querySelector("#VegTagIconBox"));
    document.querySelector("#smallImage").append(small);
  });
}

function addtocart(QtyValue, totalprice, element) {
  var qty = QtyValue;
  var total = totalprice;
  // console.log(QtyValue);
  if (qty == "") {
    alert("please Enter Some quantity ..");
    return;
  }
  var cartdata = {
    OFF: element.OFF,
    Brand: element.Brand,
    Date: element.Date,
    image: element.image,
    StrikePrice: element.StrikePrice,
    productName: element.productName,
    productprice: element.productprice,
    quantity: qty,
    totalPrice: total,
    QtyPiece: element.QtyPiece,
  };
  cartArr.push(cartdata);

  localStorage.setItem("cartData", JSON.stringify(cartArr));
  window.location.reload();
  // console.log(cartArr);
  alert(
    `Your ${cartdata.productName} successfully added with ${cartdata.quantity} quantity Thank You`
  );
}
