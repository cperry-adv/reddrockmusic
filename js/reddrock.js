$(document).ready(function(){
    $("#about").click(function(){
        $(".about-container").toggleClass('hidden visible');
    });
    $("#contact").click(function(){
        $(".contact-container").toggleClass('hidden visible');
    });
});