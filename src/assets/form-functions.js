// NavBar Dropdown when on hover instead of click
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 992) {  // inly for large screens 
        document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
            dropdown.addEventListener('mouseenter', function () { // dropdown on hover
                let dropdownMenu = this.querySelector('.dropdown-menu');
                dropdownMenu.classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function () { // reset to slide up
                let dropdownMenu = this.querySelector('.dropdown-menu');
                dropdownMenu.classList.remove('show');
            });
        });
    }
});

// error style
function errorStyle(input, spanId, message) {
    input.style.borderColor = "red";    
    document.querySelector(spanId).innerText = message; 
}
// reset sytle
function resetStyle(input, spanId) {
    input.style.borderColor = "";    
    document.querySelector(spanId).innerText = ""; 
}

/* fullname validation */ 
function checkFullname(value){
    let fullnamePattern=/^[A-Z][a-z]+ [A-Z][a-z]+$/; 
    return fullnamePattern.test(value);
}
/* email validation */ 
function checkEmail(value){
    let fullnamePattern=/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-zA-Z]{2,4}$/; 
    return fullnamePattern.test(value);
}
/* password validation */ 
function passwordValidation(value) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#!%*?&])[A-Za-z0-9@$!%#*?&]{8,20}$/;
    return passwordRegex.test(value);
}
/* confirm password validation */ 
function confirmPasswordValidation(ogPass, confPass) {

    return ogPass === confPass;
}

