// var btn = document.getElementById("body1").querySelectorAll("button");
// console.log(btn);
// btn.forEach(function(button, index) {
//     button.addEventListener("click", function(event) {
//         var btnItem = event.target;
//         var product = btnItem.parentElement;
//         var productImg = product.querySelector("img").src;
//         var productName = product.querySelector("h2").innerText;
//         var price = product.querySelector("p").innerText;
//         addcart(price, productImg, productName);
//         console.log(productImg);
//     })
// })

// function addcart(price, productImg, productName) {

//     var addtr = document.createElement("tr");
//     var trcontent = price;
//     addtr.innerHTML = '<div class="card"> <span class="cart"> </span> <div class="card__img"> <img src="' + productImg + '" alt="" /></div> <h2 class="card__title"> ' + productName + '</h2> <p class="card__price">' + price + '</p> </div>';
//     var cartTable = document.querySelector("article");
//     // console.log(cartTable);
//     // var a = cartTable.appendChild(addtr);
//     cartTable.appendChild(addtr).style.display = "flex";


// }

function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("cart").appendChild(row);
    tinhTong();
}

function xoa(button) {
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);

    tinhTong();
}

function tinhTong() {
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("div");
    // var rows = cart.getElementById("card");
    var tongg = 0;
    for (var i = 0; i < rows.length - 1; i++) {
        var cells = rows[i].getElementsByTagName("p");
        console.log(i + " " + cells)
        var price = cells[0].innerText.substring(1);
        tongg += 1 * price;
    }
    document.getElementById("tongg").innerText = tongg;
    if (tongg == 0) {
        document.getElementById("empty").style.display = "";
        document.getElementById("not-empty").style.display = "none";
    } else {
        document.getElementById("empty").style.display = "none";
        document.getElementById("not-empty").style.display = "";
    }
}