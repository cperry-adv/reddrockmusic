$(document).ready(function(){
    $("#about").click(function(){
        $(".about-container").toggleClass('hidden visible');
        $(".contact-container").hide();
    });
    $("#contact").click(function(){
        $(".contact-container").toggleClass('hidden visible');
        $(".about-container").hide();
    });
});