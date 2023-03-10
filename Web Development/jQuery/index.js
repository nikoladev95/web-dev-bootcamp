/* Vanilla JS */

// var heading = document.querySelector("h1");
// heading.style.color = "red";

/* jQuery */

$("h1").mouseover(function() {
    $("h1").css("color", "lightblue");
});

/* Vanilla JS */

// var buttons = document.querySelectorAll("button");
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

/* jQuery */

$("button").on("click", () => {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("click", function() {
    var currentColor = $("h1").css("color");
    if (currentColor === "rgb(128, 0, 128)") {
        alert("The color has already been changed!");
    } else {
        $("h1").css("color", "purple");
    }
});

$("a").attr("href", "https://www.bing.com");