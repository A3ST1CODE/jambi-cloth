var menu = document.getElementById("menuitems");
menu.style.maxHeight = "0px";

function menutoggle() {
    if (menu.style.maxHeight == "0px") {

        menu.style.maxHeight = "200px";
    } else {
        menu.style.maxHeight = "0px";

    };
};
// produtcs sitals
//  var proimg = document.getElementById("pro-img");
//  var small = document.getElementsByClassName("small-img");

function myFunction(smallimg) {
    var fullImg = document.getElementById("pro-img");
    fullImg.src = smallimg.src;
};
//   account

var log = document.getElementById("log");
var reg = document.getElementById("reg");
var ind = document.getElementById("ind");

function register() {
    reg.style.transform = "translateX(0px)"
    log.style.transform = "translateX(0px)"
    ind.style.transform = "translateX(100px)"
}

function login() {
    reg.style.transform = "translateX(300px)"
    log.style.transform = "translateX(300px)"
    ind.style.transform = "translateX(0px)"
}

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission to see the alert
        alert('Berhasil! Terima kasih telah berbelanja di Jambi Cloth');
        window.location.href = './index.html';
    });
});