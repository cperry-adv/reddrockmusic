$(document).ready(function(){
    // 'About' link
    $("#about").click(function(){
         $(".main").html('<div class="about-container"><p>Redd Rock International Music is your one-stop-shop music publishing company that does everything from licensing to creating the music you need.  We offer personalized music for your project, licensing, plus any information you may need on the subject, as well as a library of music from current bands for you to choose from.  Redd Rock International Music will write your music, place it, and handle all the paperwork.</p></div>');
         $('html, body').animate({scrollTop: $("#main").offset().top}, 1000);
         $(".main").css('display', 'block').animate({opacity: 1.0,left: '120px'}, 600);
    });
    // 'Contact' link
    $("#contact").click(function(){
        $(".main").html('<div class="contact-container"><form id="contactform" method="post" action="contactengine.php"><div class="form-item name"><div class="form-item-half"><label for="Name">Name:</label><input required type="text" name="Name1" id="Name1" /><span class="small-label">First Name</span></div><div class="form-item-half"><input required type="text" name="Name2" id="Name2" /><span class="small-label">Last Name</span></div></div><div class="form-item"><label for="Email">Email:</label><input required type="email" name="Email" id="Email" /></div><div class="form-item"><label for="City">Subject:</label><input required type="text" name="Subject" id="Subject" /></div><div class="form-item"><label for="Message">Message:</label><textarea required name="Message" rows="20" cols="20" id="Message"></textarea></div><div class="form-item"><input type="submit" name="submit" value="Submit" class="submit-button" /></div></form></div>');
        $('html, body').animate({scrollTop: $("#main").offset().top}, 1000);
        $(".main").css('display', 'block').animate({opacity: 1.0,left: '120px'}, 600);
    });
    // Contact form submit handler for thank you message
    $(".thanks").show("slow");
});