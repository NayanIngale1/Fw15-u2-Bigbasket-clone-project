
document.querySelector("#infoform").addEventListener("submit",savedata);
var checkoutArray = JSON.parse(localStorage.getItem("CheckOutData"))||[];
function savedata(event)
{
    event.preventDefault();
    var fname = document.querySelector("#fname1").value;
    var lname = document.querySelector("#lname1").value;
    var number = document.querySelector("#number2").value;
    var House = document.querySelector("#House2").value;
    var Apartment = document.querySelector("#Apart").value;
    var StreetName = document.querySelector("#Street").value;
    var landmark = document.querySelector("#LandMark2").value;
    var city = document.querySelector("#City2").value;
    var area = document.querySelector("#Area2").value;
    var pincode = document.querySelector("#Pincode2").value;
    // if((fname == "") || (lname == "") || (number == "") || (House == "") || (Apartment == "") || (StreetName == "") || (landmark == "") || (city == "") || (area == "") || (pincode == ""))
    // {
    //     alert("Please fill complete infomation");
    //     return false;
    // }
    // else
    // {

    var checkoutdata = 
    {
        FName : fname,
        LName : lname,
        ContactNo : number,
        HouseNo : House,
        Apart : Apartment,
        Street : StreetName,
        LandMark : landmark,
        City : city,
        Area : area,
        Pincode : pincode
    };
    checkoutArray.push(checkoutdata);
    localStorage.setItem("CheckOutData",JSON.stringify(checkoutdata));
    alert("Your Information is store successfully Thank You!");
    // }
}
var totalamount = 100;//JSON.parse(localstorage.getItem("totalamount"))
document.querySelector("#totalAmount").innerHTML = `Rs. ${totalamount}`
document.querySelector("#applycode").addEventListener("click",applyinput);


var totalPrice = []; //--------You Access Total Amount for Payment Page by "TotalPrice" key----------
var saveamount = [];
totalPrice.push(totalamount);
localStorage.setItem("TotalPrice",JSON.stringify(totalPrice));
function applyinput()
{
    var inputcode = document.querySelector("#input").value;
    //console.log(inputcode);
    if(inputcode == "")
    {
        alert("Please Apply PromoCode masai30");
        return false;
    }
    if(inputcode != "masai30")
    {
        alert("Please Apply Correct PromoCode");
        return false;
    }
    else
    {
        console.log(1);
        var reduceamount = ((totalamount)-((totalamount*30)/100));
        console.log(reduceamount);
        totalPrice.push(reduceamount);
        localStorage.setItem("TotalPrice",JSON.stringify(totalPrice));
        var save = ((totalamount*30)/100);
        saveamount.push(save);
        ShowReduceAmount();
    }
}
function ShowReduceAmount()
{
    var SaveAmountBox = document.createElement("div");
    SaveAmountBox.setAttribute("class","SaveAmountBox");

    var YourSavePrice = document.createElement("div");
    YourSavePrice.setAttribute("class","YourSavePrice");
    YourSavePrice.innerHTML = "You Save"

    var ShowSavePrice = document.createElement("div");
    ShowSavePrice.setAttribute("class","ShowSavePrice");
    ShowSavePrice.innerHTML = `Rs. ${saveamount[saveamount.length-1]}`

    document.querySelector("#voucherbox").append(SaveAmountBox);
    SaveAmountBox.append(YourSavePrice,ShowSavePrice);

    //------------------------------------------------
    //------------------------------------------------
    // var ReduceAmountBox = document.createElement("div");
    // ReduceAmountBox.setAttribute("class","SaveAmountBox");

    // var ReducePrice = document.createElement("div");
    // ReducePrice.setAttribute("class","YourSavePrice");
    // ReducePrice.innerHTML = "Total Amount"

    // var ShowReducePrice = document.createElement("div");
    // ShowReducePrice.setAttribute("class","ShowSavePrice");
    // ShowReducePrice.innerHTML = `Rs. ${totalPrice[totalPrice.length-1]}`

    document.querySelector("#totalAmount").innerHTML =`Rs. ${totalPrice[totalPrice.length-1]}`;
    //document.querySelector("#voucherbox").append(ReduceAmountBox);
    //ReduceAmountBox.append(ReducePrice,ShowReducePrice);

    document.querySelector("#voucherbox").append(document.querySelector("#GoToPayment"),document.querySelector("#totalItemBox"),document.querySelector("#ProductShowBox"));
}
document.querySelector("#GoToPayment1").addEventListener("click",function()
{
    alert("Thank You!");
    window.location.href = "";//------------Here You Add Payment File Location
})

var Product = JSON.parse(localStorage.getItem("cart_data"));
console.log(Product);
productDetails(Product);
function productDetails(Product)
{
    // <div id = "ProductShowBox">
    //         <div id = "ProductImage">
    //             <img id = "ProductImage1">
    //         </div>
    //         <div id = "ProductDetails">
    //             <div class = "BrandName"></div>
    //             <div class = "ProductName" id = "ProductName1">B</div>
    //             <div class = "ProductName" id = "ProductMrpPrice">C</div>
    //             <div class = "ProductName">D</div>
    //         </div>
    // </div>
    Product.map(function(element,index)
    {
        var EachProductBox = document.createElement("div");
        EachProductBox.setAttribute("class","EachProductBox");

        var Productimage = document.createElement("div");
        Productimage.setAttribute("class","ProductImage");

        var ProductImage1 = document.createElement("img");
        ProductImage1.setAttribute("class","ProductImage1")
        ProductImage1.setAttribute("src",element.image);

        var Productdetails = document.createElement("div");
        Productdetails.setAttribute("class","ProductDetails");

        var BrandName = document.createElement("div");
        BrandName.setAttribute("class","BrandName");
        BrandName.innerHTML = `Brand : ${element.Brand}`;

        var ProductName = document.createElement("div");
        ProductName.setAttribute("class","ProductName");
        ProductName.innerHTML = `Product : ${element.productName}`;

        var ProductMrpPrice = document.createElement("div");
        ProductMrpPrice.setAttribute("class","ProductMrpPrice");
        ProductMrpPrice.innerHTML = `MRP : Rs. ${element.StrikePrice}`;

        var ProductPrice = document.createElement("div");
        ProductPrice.setAttribute("class","ProductPrice");
        ProductPrice.innerHTML = `Offer Price : Rs. ${element.productprice}`

        document.querySelector("#totalItemShow").innerHTML = Product.length;
        document.querySelector("#ProductShowBox").append(EachProductBox);
        EachProductBox.append(Productimage,Productdetails);
        Productimage.append(ProductImage1);
        Productdetails.append(BrandName,ProductName,ProductMrpPrice,ProductPrice);
        
    })
}