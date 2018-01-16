$(document).ready(function(){

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

    $("#about").click(function(){
        $(".about-container").toggleClass('hidden visible');
        if ($(".contact-container").hasClass('visible')) {
          $(".contact-container").toggleClass('visible hidden');
        }
    });
    $("#contact").click(function(){
        $(".contact-container").toggleClass('hidden visible');
        if ($(".about-container").hasClass('visible')) {
          $(".about-container").toggleClass('visible hidden');
        }
    });
});