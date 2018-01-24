$(document).ready(function(){
    // 'About' link
    $("#about").click(function(){
         $("#about").addClass('active');
         $("#contact").removeClass('active');
         $("#login").removeClass('active');
         $(".main").html('<div class="about-container"><p>Redd Rock Music is a Los Angeles based Production House composed of talented musicians and sound designers with years of expertise in many facets of the entertainment industry.  Whether you are in need of an original song, composition, sound design, obscure “noise” or just want to have a chat, unearthing Redd Rock Music was no oversight.  Allow us to be the ambassadors to your audio as we envision your soundtrack. Redd Rock Music - Music The Way You See It</p></div>');
         $('html, body').animate({scrollTop: $("#main").offset().top}, 1000);
         $(".main").css('display', 'block').animate({opacity: 1.0,left: '120px'}, 600);
    });
    // 'Contact' link
    $("#contact").click(function(){
        $("#contact").addClass('active');
        $("#about").removeClass('active');
        $("#login").removeClass('active');
        $(".main").html('<div class="contact-container"><form id="contactform" method="post" action="contactengine.php"><div class="form-item name"><div class="form-item-half"><label for="Name">Name:</label><input required type="text" name="Name1" id="Name1" /><span class="small-label">First Name</span></div><div class="form-item-half"><input required type="text" name="Name2" id="Name2" /><span class="small-label">Last Name</span></div></div><div class="form-item"><label for="Email">Email:</label><input required type="email" name="Email" id="Email" /></div><div class="form-item"><label for="City">Subject:</label><input required type="text" name="Subject" id="Subject" /></div><div class="form-item"><label for="Message">Message:</label><textarea required name="Message" rows="20" cols="20" id="Message"></textarea></div><div class="form-item"><input type="submit" name="submit" value="Submit" class="submit-button" /></div></form></div>');
        $('html, body').animate({scrollTop: $("#main").offset().top}, 1000);
        $(".main").css('display', 'block').animate({opacity: 1.0,left: '120px'}, 600);
    });
    $("#login").click(function(){
        $("#login").addClass('active');
        $("#contact").removeClass('active');
        $("#about").removeClass('active');
        $(".main").html('<div class="contact-container"><form id="loginform" method="post" action="login.php"><div class="form-item"><label for="login">Login:</label><input type="text" name="login"></div><div class="form-item"><input type="text" name="password"></div><div class="form-item"><input type="submit" name="submit" value="Submit" class="submit-button" /></div></form></div>');
        $('html, body').animate({scrollTop: $("#main").offset().top}, 1000);
        $(".main").css('display', 'block').animate({opacity: 1.0,left: '120px'}, 600);
    });
    // Contact form submit handler for thank you message
    $(".thanks").show("slow").delay(2000).fadeOut("slow");
});