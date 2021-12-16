var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}

$(document).ready(function(){
    var typed = new Typed(".typing",{
        strings: ["KITTIPOD LAMBANGCHANG","TON","KITTON._","LNWTXN"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    var typed2 = new Typed(".type",{
        strings: ["Data Science", "Artificial Intelligent", "Block Chain"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
});