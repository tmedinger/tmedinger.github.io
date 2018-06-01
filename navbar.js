window.onscroll = function() {scrollStick()};

var navbar = document.getElementById("myNavbar");
var sticky = navbar.offsetTop;

function scrollStick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}