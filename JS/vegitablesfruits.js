
//---------Brand-Filter-Start-----------------------//
    
    
function fresho()
{
    var value5 = document.querySelector("#checkbox-fresho").checked;
    console.log(value5);
    if(value5 == true)
    {
        var fresho_item = array.filter(function(element,index)
        {
            return element.Brand == "Fresho";
        });
        category_page(fresho_item);
    }
    else
    {
        category_page(array);
    }  
}
function bbcombo()
{
    var value6 = document.querySelector("#checkbox-bb-combo").checked;
    if((value6 == true))
    {
        var fresho_item1 = array.filter(function(element,index)
        {
            return element.Brand == "BB-Combo";
        });
        category_page(fresho_item1);
    }
    else
    {
        category_page(array);
    }
}
//--------------Brand-Filter-End-------------------------//

//--------------Price-Filter-Start----------------------//

function LessthanRs20()
{
    var Rs20 = document.querySelector("#LessthanRs20").checked;
    if(Rs20 == true)
    {
        var lessthanRs20 = array.filter(function(element)
        {
            return element.productprice <= 20;
        });
        category_page(lessthanRs20);
    }
    else
    {
        category_page(array);
    }
}

function BetweenRs21toRs50()
{
    var Rs20 = document.querySelector("#BetweenRs21toRs50").checked;
    if(Rs20 == true)
    {
        var BetweenRs21toRs50 = array.filter(function(element)
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
        category_page(array);
    }
}

function BetweenRs51toRs100()
{
    var Rs20 = document.querySelector("#BetweenRs51toRs100").checked;
    if(Rs20 == true)
    {
        var BetweenRs51toRs100 = array.filter(function(element)
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
        category_page(array);
    }
}

function BetweenRs101toRs200()
{
    var Rs20 = document.querySelector("#BetweenRs101toRs200").checked;
    if(Rs20 == true)
    {
        var BetweenRs101toRs200 = array.filter(function(element)
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
        category_page(array);
    }
}

function BetweenRs201toRs500()
{
    var Rs20 = document.querySelector("#BetweenRs201toRs500").checked;
    if(Rs20 == true)
    {
        var BetweenRs201toRs500 = array.filter(function(element)
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
        category_page(array);
    }
}

//--------------Price-Filter-End----------------------//

//---------------Discount-Filter-Start----------------//


function Between_15_25()
{
    var between_15_25 = document.querySelector("#Between_15_25").checked;
    if(between_15_25 == true)
    {
        var Between_15_25 = array.filter(function(element)
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
        category_page(array);
    }
}

function Morethan25()
{
    var morethan25 = document.querySelector("#Morethan25").checked;
    if(morethan25 == true)
    {
        var Morethan25 = array.filter(function(element)
        {
            return element.OFF > 25;
        });
        category_page(Morethan25);
    }
    else
    {
        category_page(array);
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
var array =
[
    {
        OFF : 20, 
        Brand: "BB-Combo",
        Date: "Standard Delivery : 23 Jan",
        Link: "https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
        StrikePrice: "281.25",
        productName: "Onion",
        productprice: "191.90"
    },
    {
        OFF : "51",
        Brand: "Fresho",
        Date: "Standard Delivery : 23 Jan",
        Link: "https://www.bigbasket.com/media/uploads/p/s/10000204_16-fresho-tomato-local.jpg",
        StrikePrice: "20",
        productName: "Tomato-Local",
        productprice: "13.13"
    },
    {
        OFF : "31",
        Brand: "Fresho",
        Date: "Standard Delivery : 23 Jan",
        Link: "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
        StrikePrice: "40",
        productName: "Potato",
        productprice: "28.28"
    },
    {
        OFF : "41",
        Brand: "Fresho",
        Date: "Standard Delivery : 23 Jan",
        Link: "https://www.bigbasket.com/media/uploads/p/s/10000201_15-fresho-tomato-hybrid.jpg",
        StrikePrice: "22.73",
        productName: "Tomato-Hybrid",
        productprice: "18.18"
    },
    {
        OFF : "51",
        Brand: "Fresho",
        Date: "Standard Delivery : 23 Jan",
        Link: "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
        StrikePrice: "42.02",
        productName: "Ladies Finger",
        productprice: "34.34",
    },
    {
        OFF : "61",
        Brand: "Fresho",
        Date: "Standard Delivery : 23 Jan",
        Link: "https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
        StrikePrice: "37.88",
        productName: "Carrot-Orange",
        productprice: "30.30"
    },
    {
        OFF : "32",
        Brand: "Fresho",
        Date: "Standard Delivery : 23 Jan",
        Link: "https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
        StrikePrice: "17.50",
        productName: "Cucumber",
        productprice: "12.12"
    },
    {
        OFF : "35",
        Brand: "Fresho",
        Date: "Standard Delivery : 23 Jan",
        Link: "https://www.bigbasket.com/media/uploads/p/s/10000098_9-fresho-coriander-leaves.jpg",
        StrikePrice: "21.88",
        productName: "Coriander Leaves",
        productprice: "10.10"
    }
];


var cart = JSON.parse(localStorage.getItem("cart_data"))||[];
category_page(array);
function category_page(array)
{
    document.querySelector("#gridcontainer").innerHTML = "";
    array.map(function(element,index)
    {
        var box15 = document.createElement("div");
        box15.setAttribute("class","each-element-container");

        var box16 = document.createElement("div");
        box16.setAttribute("class","percentage-box");

        var para1 = document.createElement("p");
        para1.setAttribute("class","percentage-content-box");
        para1.textContent = `GET ${element.OFF} % OFF`

        var box17 = document.createElement("div");
        box17.setAttribute("class","percentage-color");

        var box18 = document.createElement("div");
        box18.setAttribute("class","product-photo");

        var image4 = document.createElement("img");
        image4.setAttribute("class","product-image-border");
        image4.setAttribute("src",element.Link);

        var box19 = document.createElement("div");
        box19.setAttribute("class","veg-color-tag");

        var box20 = document.createElement("div");
        box20.setAttribute("class","veg-color-tag-border");

        var para2 = document.createElement("p");
        para2.setAttribute("class","brand-product-name-border");
        para2.textContent = element.Brand;

        var para3 = document.createElement("p");
        para3.setAttribute("class","brand-product-name-border");
        para3.textContent = element.productName;

        var box21 = document.createElement("div");
        box21.setAttribute("class","qty-mrp-container");

        var box22 = document.createElement("div");
        box22.setAttribute("class","mrp-container");

        var para4 = document.createElement("p");
        para4.setAttribute("class","mrp-border");
        para4.textContent = "MRP:";

        var para5 = document.createElement("p");
        para5.setAttribute("class","strick-price-border");
        para5.textContent = "Rs"+element.StrikePrice;

        var para6 = document.createElement("p");
        para6.setAttribute("class","product-price-border");
        para6.textContent = "RS:"+element.productprice;

        var box23 = document.createElement("div");
        box23.setAttribute("class","standart-delivery-box");

        var box24 = document.createElement("div");
        box24.setAttribute("class","standart-delivery-cart");

        var para7 = document.createElement("p");
        para7.setAttribute("class","standard-delivery-border");
        para7.textContent = element.Date;

        var image5 = document.createElement("img");
        image5.setAttribute("class","standard-delivery-image-tag");
        image5.setAttribute("src","https://www.bbassets.com/static/v2498/custPage/build/content/img/standard-del.svg");

        var box25 = document.createElement("div");
        box25.setAttribute("class","qty-box");

        var para8 = document.createElement("p");
        para8.setAttribute("class","qty-border");
        para8.textContent = "QTY";

        var box26 = document.createElement("div");
        box26.setAttribute("class","qty-entry-box");

        var input1 = document.createElement("input");
        input1.setAttribute("class","qty-input-box");
        input1.type = "text";

        var box27 = document.createElement("div");
        box27.setAttribute("class","add-to-cart-box");

        var button1 = document.createElement("button");
        button1.textContent = "Add To Cart";
        button1.setAttribute("class","add-to-cart-button")
        button1.addEventListener("click",function()
        {
            addtocart(input1.value,element);
        })

        box26.append(input1);
        box27.append(button1);
        box25.append(para8,box26,box27);
        box24.append(image5);
        box23.append(box24,para7);
        box22.append(para4,para5,para6);
        box21.append(box22,box23,box25);
        box19.append(box20);
        box18.append(image4);
        box16.append(para1,box17);
        box15.append(box16,box18,box19,para2,para3,box21);
        document.querySelector("#gridcontainer").append(box15);
    });
}
function addtocart(input1,element)
{
    var qty = input1;
    var total = input1*element.productprice;
    var object1 =
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
    cart.push(object1);

    localStorage.setItem("cart_data",JSON.stringify(cart));
    console.log(cart);
    alert(`Your ${object1.productName} successfully added with ${object1.quantity} quantity Thank You`);
}
function sorting()
{
    var value2 = document.querySelector("#select1").value;
    console.log(value2);
    if(value2 == "low")
    {
        array.sort(function(a,b)
        {
            return Number(a.productprice) - Number(b.productprice);
            //category_page(array);
        })
        category_page(array);
    }
    if(value2 == "high")
    {
        array.sort(function(a,b)
        {
            return Number(b.productprice) - Number(a.productprice);
            //category_page(array);
        })
        category_page(array);
    }
    if(value2 == "char")
    {
        array.sort(function(a,b)
        {
            if (a.productName < b.productName) return -1;
            if (a.productName > b.productName) return  1;
            return 0;
            //category_page(array);
        })
        category_page(array);
    }
    if(value2 == "savinghigh")
    {
        array.sort(function(a,b)
        {
            return Number(b.StrikePrice) - Number(a.StrikePrice);
            //category_page(array);
        })
        category_page(array);
    }
    if(value2 == "savinglow")
    {
        array.sort(function(a,b)
        {
            return Number(a.StrikePrice) - Number(b.StrikePrice);
            //category_page(array);
        })
        category_page(array);
    }
    if(value2 == "offhigh")
    {
        array.sort(function(a,b)
        {
            return Number(b.OFF) - Number(a.OFF);
        })
        category_page(array);
    }
}