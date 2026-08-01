const email=document.getElementById("email");
const phone=document.getElementById("phone");

email.addEventListener("input",validateEmail);
phone.addEventListener("input",validatePhone);

function validateEmail(){

const pattern=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

if(pattern.test(email.value)){
document.getElementById("emailError").innerHTML="Valid Email";
document.getElementById("emailError").style.color="green";
}
else{
document.getElementById("emailError").innerHTML="Invalid Email";
document.getElementById("emailError").style.color="red";
}
}

function validatePhone(){

const pattern=/^[6-9]\d{9}$/;

if(pattern.test(phone.value)){
document.getElementById("phoneError").innerHTML="Valid Phone Number";
document.getElementById("phoneError").style.color="green";
}
else{
document.getElementById("phoneError").innerHTML="Invalid Phone Number";
document.getElementById("phoneError").style.color="red";
}
}
