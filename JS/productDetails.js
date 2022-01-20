
var ProductDetails = JSON.parse(localStorage.getItem("EachProductData"));
var cart = JSON.parse(localStorage.getItem("cart_data"))||[];
console.log(ProductDetails);

Details(ProductDetails);
function Details(ProductDetails)
{
    ProductDetails.map(function(element,index)
    {
        var ProductImage = document.createElement("img");
        ProductImage.setAttribute("class","Product-Image");
        ProductImage.setAttribute("src",element.image);

        //var QtyValue = document.querySelector("#QtyInputBox").value;
        document.querySelector("#AddToCartButton").addEventListener("click",function()
        {
            var QtyValue = document.querySelector("#QtyInputBox").value;
            //console.log(QtyValue);
            var totalprice = QtyValue*element.productprice;
            //console.log(totalprice);
            document.querySelector("#Quantity").innerHTML = `Your Total Quantity : ${QtyValue}`;
            document.querySelector("#Amount").innerHTML = `Your Total Amount : ${totalprice}`
        });
        document.querySelector("#SaveButoon").addEventListener("click",function()
        {
            var QtyValue = document.querySelector("#QtyInputBox").value;
            var totalprice = QtyValue*element.productprice;
            console.log(QtyValue);
            console.log(totalprice);
            addtocart(QtyValue,totalprice,element);

        })


        document.querySelector("#Quantity").innerHTML = `Your Total Quantity : 0`;
        document.querySelector("#Amount").innerHTML = `Your Total Amount : 0`
        document.querySelector("#DeliveryContent").innerHTML = `${element.Date}`
        document.querySelector("#TaxContent").innerHTML = `(Inclusive of all taxes)`
        document.querySelector("#SavingOff").innerHTML = `You Save : ${element.OFF} %`
        document.querySelector("#Price").innerHTML = `Price : Rs ${element.productprice}`
        document.querySelector("#StrickPrice").innerHTML = `Rs ${element.StrikePrice}`
        document.querySelector("#Mrp").innerHTML = `MRP :`
        document.querySelector("#BrandProductNameWeight").innerHTML = `${element.Brand} : ${element.productName} : ${element.QtyPieceForOneElement}`
        document.querySelector("#BrandBox").innerHTML = element.Brand;
        document.querySelector("#imagebox").append(ProductImage,document.querySelector("#VegTagIconBox"));
    })
}
function addtocart(QtyValue,totalprice,element)
{
    var qty = QtyValue;
    var total = totalprice;
    var cartdata =
    {
        OFF : element.OFF,
        Brand: element.Brand,
        Date: element.Date,
        image: element.image,
        StrikePrice: element.StrikePrice,
        productName: element.productName,
        productprice: element.productprice,
        quantity : qty,
        totalPrice : total,
        QtyPiece : element.QtyPiece
    };
    cart.push(cartdata);

    localStorage.setItem("cart_data",JSON.stringify(cart));
    console.log(cart);
    alert(`Your ${cartdata.productName} successfully added with ${cartdata.quantity} quantity Thank You`);
}