<?php

$EmailFrom = "info@reddrockmusic.com";
$EmailTo = "chris@reddrockmusic.com,redd@reddrockmusic.com,enrique@reddrockmusic.com,jay@reddrockmusic.com";
$Subject = Trim(stripslashes($_POST['Subject'])); 
$NameFirst = Trim(stripslashes($_POST['Name1'])); 
$NameLast = Trim(stripslashes($_POST['Name2'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "Redd Rock Music Website Contact Form Submission";
$Body .= "\n";
$Body .= "First Name: ";
$Body .= $NameFirst;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $NameLast;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>