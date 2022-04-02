const btn = document.querySelectorAll("button");

// Lấy thông tin
btn.forEach(function(button, index) {
    // console.log(button, index);
    button.addEventListener("click", function(event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("card__img").src;
        var productTen = product.querySelector("card__name").innerText;
        var productGia = product.querySelector(".card__price").innerText;

        addCart(productImg, productTen, productGia);

    })

})

// Thêm sản phẩm
function addCart(productImg, productTen, productGia) {

    var addtr = document.createElement("tr");

    //Nếu sp trùng thì tăng số lượng?????
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productTen) {
            alert("Sản phẩm đã có trong giỏ bạn có thể mua thêm bằng cách tăng số lượng! Chúng tôi sẽ nhanh chống cải thiện, Xin lỗi vì sự bất tiện này ");
            return
        }
    }

    var trcontent = '<tr><td style="display: flex; align-items: center;"> <img style="width:70px; margin-right: 20px;" src="' + productImg + '" alt=""><span class="title">' + productTen + '</span></td><td><p>' + productGia + '</p></td> <td> <input style="width:30px; outline:none;" type="number" value="1" min="1"> </td><td style="cursor:pointer;"> <i class="far fa-trash-alt"></i></td></tr>';
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector('tbody');
    // console.log(cartTable)
    cartTable.append(addtr);
    alert("Thêm sản phẩm thành công");
    // Tổng tiền
    tongTien()
    xoa()
}

function tongTien() {
    var cartItem = document.querySelectorAll("tbody tr");
    var Sum = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;

        var productGia = cartItem[i].querySelector("p").innerHTML;

        tongTungMon = inputValue * productGia * 1000;

        Sum += tongTungMon;
        // SUM = Sum.toLocaleString('de-DE') Hàm hiển thị tiền dưới dạng x.000
    }
    var cartTong = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTong.innerHTML = Sum.toLocaleString('de-DE')
    cartPrice.innerHTML = Sum.toLocaleString('de-DE')
        // console.log(cartTong)
    tangSoLuong()
}

//Xóa sản phẩm
function xoa() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll("td .far")
        productT[i].addEventListener("click", function(event) {
            var xoasp = event.target
            var cartItem = xoasp.parentElement.parentElement
            cartItem.remove();
            tongTien()

        })

    }
}
// Nếu sản phẩm đã có trong giỏ hàng thì sẽ tăng số lượng
function tangSoLuong() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var soLuong = document.querySelector("td input")
        soLuong.addEventListener("change", function() {
            tongTien()
        })

    }
}

const cartbtn = document.querySelector(".fa-times")
const cartShow = document.querySelector(".fa-shopping-cart")

cartShow.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "0"
})

cartbtn.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "-100%"
})

// Thanh toán
function checkout() {
    var cartItem = document.querySelector("tbody");
    alert("Thanh toán thành công!");
    cartItem.remove();
    tongTien()

}