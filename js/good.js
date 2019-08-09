function addFavorite() {
    swal({
        title: "成功加入我的最愛!",
        icon: "success",
    });
}

function addCart() {
    swal({
        title: "成功加入購物車!",
        icon: "success",
    });
}

function moveFavorite() {
    swal({
        title: "已將商品移到我的最愛!",
        icon: "success",
    });
}

// 移除我的最愛的商品
function removeGood() {
    swal({
            title: "是否移除商品?",
            icon: "warning",
            // buttons: true,
            buttons: ["取消", "確定"],
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("已完成商品移除", {
                    icon: "success",
                });
            } else {
                swal("你的商品還在!");
            }
        });
}

// 註冊格式驗證
// function checkRegisterForm() {
//     var account = $("#account").val();
//     var password = $("#password").val();
//     var Regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}/;
//     var accountResult = Regex.test(account);
//     var passwordResult = Regex.test(password);
//     // console.log(accountResult);
//     // console.log(passwordResult);
//     if (accountResult == false && passwordResult == false) {
//         swal({
//             title: "帳號和密碼格式錯誤!",
//             icon: "info",
//         });
//     } else if (accountResult == false) {
//         swal({
//             title: "帳號格式錯誤!",
//             icon: "info",
//         });
//     } else if (passwordResult == false) {
//         swal({
//             title: "密碼格式錯誤!",
//             icon: "info",
//         });
//     } else {
//         swal({
//             title: "註冊完成!",
//             icon: "success",
//         });
//     }
// }

// 註冊格式驗證
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// index輪播區
$(function () {
    $("#myCarousel").carousel('cycle');
    // 循环轮播到上一个项目
    $(".prev-slide").click(function () {
        $("#myCarousel").carousel('prev');
    });
    // 循环轮播到下一个项目
    $(".next-slide").click(function () {
        $("#myCarousel").carousel('next');
    });
    // 循环轮播到某个特定的帧 
    $(".slide-one").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function () {
        $("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function () {
        $("#myCarousel").carousel(2);
    });
});

// 購買紀錄頁面的日期選擇器
$(function () {
    $("#datepicker").datepicker();
});

$(document).ready(function () {
    // 購物車介面 更改商品數量 對應的小計、總計改變
    $("select").change(function () {
        // qty為購買數量，price為單價，subtotal為小計，total為總計，spread為改變數量後的小計價差
        var qty = $(this).val();
        // alert("數量:" + qty);
        // siblings:所有兄弟節點
        var price = $(this).siblings(".card-price").html();
        // alert("價格:" + price);
        var subtotal = $(this).parents().siblings("#subtotalDiv").children("#subtotal").html();
        // console.log(subtotal);        
        var total = $(this).parents().siblings("#totalDiv").children("#total").html();
        // alert(total);

        var spread = price * qty - subtotal;
        subtotal = price * qty;
        total = parseInt(total) + parseInt(spread);
        $(this).parents().siblings("#subtotalDiv").children("#subtotal").html(subtotal);
        $(this).parents().siblings("#totalDiv").children("#total").html(total);
    });

    // index頁面 分類目錄顯示小分類
    $(".category-name").mouseenter(function () {
        // var content = $(this).children().html();
        // console.log(content);
        $(this).children().children().css("display", "block");
    });
    $(".category-name").mouseleave(function () {
        $(this).children().children().css("display", "none");
    })
})