$(document).ready(function(){

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