
//---------Brand-Filter-Start-----------------------//
    
    
function fresho()
{
    var value5 = document.querySelector("#checkbox-fresho").checked;
    console.log(value5);
    if(value5 == true)
    {
        var fresho_item = VegeFruitsData.filter(function(element,index)
        {
            return element.Brand == "Fresho";
        });
        category_page(fresho_item);
    }
    else
    {
        category_page(VegeFruitsData);
    }  
}
function bbcombo()
{
    var value6 = document.querySelector("#checkbox-bb-combo").checked;
    if((value6 == true))
    {
        var fresho_item1 = VegeFruitsData.filter(function(element,index)
        {
            return element.Brand == "BB-Combo";
        });
        category_page(fresho_item1);
    }
    else
    {
        category_page(VegeFruitsData);
    }
}
//--------------Brand-Filter-End-------------------------//

//--------------Price-Filter-Start----------------------//

function LessthanRs20()
{
    var Rs20 = document.querySelector("#LessthanRs20").checked;
    if(Rs20 == true)
    {
        var lessthanRs20 = VegeFruitsData.filter(function(element)
        {
            return element.productprice <= 20;
        });
        category_page(lessthanRs20);
    }
    else
    {
        category_page(VegeFruitsData);
    }
}

function BetweenRs21toRs50()
{
    var Rs20 = document.querySelector("#BetweenRs21toRs50").checked;
    if(Rs20 == true)
    {
        var BetweenRs21toRs50 = VegeFruitsData.filter(function(element)
        {
            if((element.productprice > 20) && (element.productprice <= 50))
            {
                return element.productprice;
            }
        });
        category_page(BetweenRs21toRs50);
    }
    else
    {
        category_page(VegeFruitsData);
    }
}

function BetweenRs51toRs100()
{
    var Rs20 = document.querySelector("#BetweenRs51toRs100").checked;
    if(Rs20 == true)
    {
        var BetweenRs51toRs100 = VegeFruitsData.filter(function(element)
        {
            if((element.productprice > 50) && (element.productprice <= 100))
            {
                return element.productprice;
            }
        });
        category_page(BetweenRs51toRs100);
    }
    else
    {
        category_page(VegeFruitsData);
    }
}

function BetweenRs101toRs200()
{
    var Rs20 = document.querySelector("#BetweenRs101toRs200").checked;
    if(Rs20 == true)
    {
        var BetweenRs101toRs200 = VegeFruitsData.filter(function(element)
        {
            if((element.productprice > 100) && (element.productprice <= 200))
            {
                return element.productprice;
            }
        });
        category_page(BetweenRs101toRs200);
    }
    else
    {
        category_page(VegeFruitsData);
    }
}

function BetweenRs201toRs500()
{
    var Rs20 = document.querySelector("#BetweenRs201toRs500").checked;
    if(Rs20 == true)
    {
        var BetweenRs201toRs500 = VegeFruitsData.filter(function(element)
        {
            if((element.productprice > 200) && (element.productprice <= 500))
            {
                return element.productprice;
            }
        });
        category_page(BetweenRs201toRs500);
    }
    else
    {
        category_page(VegeFruitsData);
    }
}

//--------------Price-Filter-End----------------------//

//---------------Discount-Filter-Start----------------//


function Between_15_25()
{
    var between_15_25 = document.querySelector("#Between_15_25").checked;
    if(between_15_25 == true)
    {
        var Between_15_25 = VegeFruitsData.filter(function(element)
        {
            if((element.OFF >= 15) && (element.OFF <= 25))
            {
                return element.OFF;
            }
        });
        category_page(Between_15_25);
    }
    else
    {
        category_page(VegeFruitsData);
    }
}

function Morethan25()
{
    var morethan25 = document.querySelector("#Morethan25").checked;
    if(morethan25 == true)
    {
        var Morethan25 = VegeFruitsData.filter(function(element)
        {
            return element.OFF > 25;
        });
        category_page(Morethan25);
    }
    else
    {
        category_page(VegeFruitsData);
    }
}

//---------------Discount-Filter-End----------------//

//---------------Fresh offer banner Start-----------//

var image2 = document.createElement("img");
image2.setAttribute("class","bannerphoto");
image2.setAttribute("src","https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg");
document.querySelector("#bannerphoto").append(image2);

//---------------Fresh offer banner End-----------//

//---------------All Product Photo Start----------//

var image3 = document.createElement("img");
image3.setAttribute("class","all-product-image-border");
image3.setAttribute("src","https://www.bbassets.com/static/v2498/custPage/build/content/img/standard-del.svg");
document.querySelector("#all-product-image-border").append(image3);

//----------------All Product Photo End----------//

// -----------------------------------------------Product-Details-Changes-1-start----------------------//
var VegeFruitsData = JSON.parse(localStorage.getItem("VegeFruitData"))
var OneProduct = [];

//------------------------------------------------Product-Details-Changes-1-Start----------------------//
var cart = JSON.parse(localStorage.getItem("cart_data"))||[];
category_page(VegeFruitsData);
function category_page(VegeFruitsData)
{
    document.querySelector("#gridcontainer").innerHTML = "";
    VegeFruitsData.map(function(element,index)
    {
        var ElementBox = document.createElement("div");
        ElementBox.setAttribute("class","each-element-container");

        var PercentageBox = document.createElement("div");
        PercentageBox.setAttribute("class","percentage-box");

        var Percentage = document.createElement("p");
        Percentage.setAttribute("class","percentage-content-box");
        Percentage.textContent = `GET ${element.OFF} % OFF`

        var PercentageColor = document.createElement("div");
        PercentageColor.setAttribute("class","percentage-color");

        var ProductPhotoDiv = document.createElement("div");
        ProductPhotoDiv.setAttribute("class","product-photo");

        var ProductImage = document.createElement("img");
        ProductImage.setAttribute("class","product-image-border");
        ProductImage.setAttribute("src",element.image);

        //-------------------------------------Product-Details-Changes-2-start-----------------------//
        ProductImage.addEventListener("click",function()
        {
            console.log(element);
            OneProduct.push(element);
            console.log(OneProduct);
            localStorage.setItem("EachProductData",JSON.stringify(OneProduct));
            window.location.href = "Product-Details.html";
        });
        //-------------------------------------Product-Details-Changes-2-End-------------------------//

        var BrandName = document.createElement("p");
        BrandName.setAttribute("class","brand-product-name-border");
        BrandName.textContent = element.Brand;

        var ProductNames = document.createElement("p");
        ProductNames.setAttribute("class","brand-product-name-border");
        ProductNames.textContent = element.productName;

        var PriceAsPerQtyPieceBox = document.createElement("div");
        PriceAsPerQtyPieceBox.setAttribute("class","QtyPieceBox")
        var PriceAsPerQtyPiece = document.createElement("p");
        PriceAsPerQtyPiece.setAttribute("class","Qty-Piece");
        PriceAsPerQtyPiece.textContent = element.QtyPiece;

        var QtyMrpContainer = document.createElement("div");
        QtyMrpContainer.setAttribute("class","qty-mrp-container");

        var MrpBox = document.createElement("div");
        MrpBox.setAttribute("class","mrp-container");

        var MrpName = document.createElement("p");
        MrpName.setAttribute("class","mrp-border");
        MrpName.textContent = "MRP:";

        var StrickPrice = document.createElement("p");
        StrickPrice.setAttribute("class","strick-price-border");
        StrickPrice.textContent = "Rs"+element.StrikePrice;

        var ProductValue = document.createElement("p");
        ProductValue.setAttribute("class","product-price-border");
        ProductValue.textContent = "RS:"+element.productprice;

        var StandardContainer = document.createElement("div");
        StandardContainer.setAttribute("class","standard-delivery-box");

        var StandardIcon = document.createElement("div");
        StandardIcon.setAttribute("class","standard-delivery-cart");

        var StandardContent = document.createElement("p");
        StandardContent.setAttribute("class","standard-delivery-border");
        StandardContent.textContent = element.Date;

        var StandardImage = document.createElement("img");
        StandardImage.setAttribute("class","standard-delivery-image-tag");
        StandardImage.setAttribute("src","https://www.bbassets.com/static/v2498/custPage/build/content/img/standard-del.svg");

        var QtyContainer = document.createElement("div");
        QtyContainer.setAttribute("class","qty-box");

        var QtyText = document.createElement("p");
        QtyText.setAttribute("class","qty-border");
        QtyText.textContent = "QTY";

        var QtyEntryBox = document.createElement("div");
        QtyEntryBox.setAttribute("class","qty-entry-box");

        var InputBox = document.createElement("input");
        InputBox.setAttribute("class","qty-input-box");
        InputBox.type = "text";

        var AddToCartBox = document.createElement("div");
        AddToCartBox.setAttribute("class","add-to-cart-box");

        var AddToCartBtn = document.createElement("button");
        AddToCartBtn.textContent = "Add To Cart";
        AddToCartBtn.setAttribute("class","add-to-cart-button")
        AddToCartBtn.addEventListener("click",function()
        {
            addtocart(InputBox.value,element);
        })

        PriceAsPerQtyPieceBox.append(PriceAsPerQtyPiece);
        QtyEntryBox.append(InputBox);
        AddToCartBox.append(AddToCartBtn);
        QtyContainer.append(QtyText,QtyEntryBox,AddToCartBox);
        StandardIcon.append(StandardImage);
        StandardContainer.append(StandardIcon,StandardContent);
        MrpBox.append(MrpName,StrickPrice,ProductValue);
        QtyMrpContainer.append(MrpBox,StandardContainer,QtyContainer);
        //VegTag.append(VegTagColor);
        ProductPhotoDiv.append(ProductImage);
        PercentageBox.append(Percentage,PercentageColor);
        ElementBox.append(PercentageBox,ProductPhotoDiv,BrandName,ProductNames,PriceAsPerQtyPieceBox,QtyMrpContainer);
        document.querySelector("#gridcontainer").append(ElementBox);
    });
}
function addtocart(InputBox,element)
{
    var qty = InputBox;
    var total = InputBox*element.productprice;
    var cartdata =
    {
        OFF : element.OFF,
        Brand: element.Brand,
        Date: element.Date,
        Link: element.Link,
        StrikePrice: element.StrikePrice,
        productName: element.productName,
        productprice: element.productprice,
        quantity : qty,
        totalPrice : total
    };
    cart.push(cartdata);

    localStorage.setItem("cart_data",JSON.stringify(cart));
    console.log(cart);
    alert(`Your ${cartdata.productName} successfully added with ${cartdata.quantity} quantity Thank You`);
}
function sorting()
{
    var value2 = document.querySelector("#select1").value;
    console.log(value2);
    if(value2 == "low")
    {
        VegeFruitsData.sort(function(a,b)
        {
            return Number(a.productprice) - Number(b.productprice);
            //category_page(VegeFruitsData);
        })
        category_page(VegeFruitsData);
    }
    if(value2 == "high")
    {
        VegeFruitsData.sort(function(a,b)
        {
            return Number(b.productprice) - Number(a.productprice);
            //category_page(VegeFruitsData);
        })
        category_page(VegeFruitsData);
    }
    if(value2 == "char")
    {
        VegeFruitsData.sort(function(a,b)
        {
            if (a.productName < b.productName) return -1;
            if (a.productName > b.productName) return  1;
            return 0;
            //category_page(VegeFruitsData);
        })
        category_page(VegeFruitsData);
    }
    if(value2 == "savinghigh")
    {
        VegeFruitsData.sort(function(a,b)
        {
            return Number(b.StrikePrice) - Number(a.StrikePrice);
            //category_page(VegeFruitsData);
        })
        category_page(VegeFruitsData);
    }
    if(value2 == "savinglow")
    {
        VegeFruitsData.sort(function(a,b)
        {
            return Number(a.StrikePrice) - Number(b.StrikePrice);
            //category_page(VegeFruitsData);
        })
        category_page(VegeFruitsData);
    }
    if(value2 == "offhigh")
    {
        VegeFruitsData.sort(function(a,b)
        {
            return Number(b.OFF) - Number(a.OFF);
        })
        category_page(VegeFruitsData);
    }
}