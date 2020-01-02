function nameValidation()
{
var firstvalue=document.getElementById("idcheck").value;
var namePattern="^[a-z0-9A-Z]+$";
if(!firstvalue.match(namePattern))
document.getElementById("errorName").innerHTML="User Id should be in alphabets and numbers";
else
document.getElementById("errorName").innerHTML="";
}

function passwordValidation()
{
var firstvalue=document.getElementById("passcheck").value;
var passPattern="^[a-zA-Z0-9*&^%$#@!._]{7,}$";
if(!firstvalue.match(passPattern))
document.getElementById("errorPass").innerHTML="Password should be minimum of 8 characters";
else
document.getElementById("errorPass").innerHTML="";
}


function submitValidation()
{
	var a = nameValidation();
	var b = passwordValidation();
	if(a && b)
		return true;
	else
		return false;
}
