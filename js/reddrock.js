$(document).ready(function(){

    $("#about").click(function(){
         $(".main").html("Hello World");
        $(".about-container").toggleClass('hidden visible');
        if ($(".contact-container").hasClass('visible')) {
          $(".contact-container").toggleClass('visible hidden');
        }
    });
    $("#contact").click(function(){
        $(".main").html("boondoggle");
        $(".contact-container").toggleClass('hidden visible');
        if ($(".about-container").hasClass('visible')) {
          $(".about-container").toggleClass('visible hidden');
        }
    });
});