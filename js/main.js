$(document).ready(function() {
    // menu click event
    $(".menuBtn").click(function() {
        $(this).toggleClass("act");
        if ($(this).hasClass("act")) {
            $(".mainMenu").addClass("act");
        } else {
            $(".mainMenu").removeClass("act");
        }
    });
});

function myFunction() {
    var lermais = document.getElementById("more-hidden");
    lermais.classList.toggle("open-more");
    var butt = document.getElementById("hide");
    butt.classList.toggle("hide");

}

function about() {
    var quem = document.getElementById("more-hide");
    quem.classList.toggle("show-more");
    var buttn = document.getElementById("hiden");
    buttn.classList.toggle("hiden");

}