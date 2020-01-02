function nameValidation()
{
var firstvalue=document.getElementById("namecheck").value;
var namePattern="^[a-zA-Z]+$";
if(!firstvalue.match(namePattern))
	document.getElementById("errorName1").innerHTML="Name should be in alphabets";
else
	document.getElementById("errorName1").innerHTML="";
}

function useridValidation()
{
var firstvalue=document.getElementById("idcheck").value;
var useridPattern=/^\w+$/;
if(!firstvalue.match(useridPattern))
document.getElementById("errorUserid").innerHTML="UserId must contain only letters, numbers and underscores!";
else
document.getElementById("errorUserid").innerHTML="";
}

function emailidValidation()
{
var firstvalue=document.getElementById("emailidcheck").value;
var emailidPattern="[A-Za-z0-9_.]+[@]{1}[a-zA-Z]+(.com|.co|.in)";
if(!firstvalue.match(emailidPattern))
document.getElementById("errorEmailid").innerHTML="Enter valid Email Id";
else
document.getElementById("errorEmailid").innerHTML="";
}

function phonenumValidation()
{
var firstvalue=document.getElementById("phonenumcheck").value;
var phonenumPattern="[6-9]{1}[0-9]{9}";
if(!firstvalue.match(phonenumPattern))
document.getElementById("errorPhonenum").innerHTML="Enter valid Phone Number";
else
document.getElementById("errorPhonenum").innerHTML="";
}

function passwordValidation2()
{
var firstvalue=document.getElementById("passcheck2").value;
var passPattern="^[a-zA-Z0-9*&^%$#@!._]{8,}$";
if(!firstvalue.match(passPattern))
document.getElementById("errorPass2").innerHTML="Password should be minimum of 8 characters";
else
document.getElementById("errorPass2").innerHTML="";
}

function confirmpassValidation()
{
var firstvalue=document.getElementById("passcheck2").value;
var secondvalue=document.getElementById("confirmpasscheck").value;
if(secondvalue == firstvalue)
document.getElementById("errorConfirm").innerHTML="";
else
document.getElementById("errorConfirm").innerHTML="Password does not match";
}

function submitForm2()
{
	var a=nameValidation();
	var b=useridValidation();
	var c=emailidValidation();
	var d=phonenumValidation();
	var e=passwordValidation2();
	var f=confirmpassValidation();
	if(a&&b&&c&&d&&e&&f)
		return (true);
	else
		return (false);
}
