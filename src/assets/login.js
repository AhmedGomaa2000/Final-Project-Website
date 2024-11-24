onload = function() {
    const errorMsg = document.querySelector("#error-msg");
    const loginForm = document.forms['login-form'];
    const userEmail = document.forms['login-form']['email'];
    const userPassword = document.forms['login-form']['password'];
    const hideButton = document.getElementsByClassName("hide-pass");
    const showButton = document.getElementsByClassName("show-pass");    
    const checkBox = document.getElementById("remember-check");

    // turning string from local storage back to array
    let searchUsers = JSON.parse(localStorage.getItem("users") || "[]");
    let userFound = false;
    let isValid = false;

    // to show and hide password input
    hideButton[0].addEventListener("click", () => {
        userPassword.type = "text";
        hideButton[0].style.display = "none";
        showButton[0].style.display = "block";
    });

    showButton[0].addEventListener("click", () => {
        userPassword.type = "password";
        hideButton[0].style.display = "block";
        showButton[0].style.display = "none";
    });

    // form submission
    loginForm.onsubmit = function() {
        isValid = true;

        if(userEmail.value.trim() === "") {
            errorStyle(userEmail, "#email-error", "Email is required");
            isValid = false;
        } else if(!checkEmail(userEmail.value)) {
            errorStyle(userEmail, "#email-error", "Email is invalid");
            isValid = false;
        }
        if(userPassword.value.trim() === "") {
            errorStyle(userPassword, "#password-error", "Password is required");
            isValid = false;
        } 

        // searching in array
        for(let i = 0; i < searchUsers.length; i++) {
            if(userEmail.value.trim() == searchUsers[i].email && userPassword.value.trim() == searchUsers[i].password) {
                sessionStorage.setItem("currentUser", searchUsers[i].name);
                if(checkBox.checked) {
                    localStorage.setItem("savedUser", JSON.stringify(searchUsers[i]));
                }
                userFound = true;
                break;
            }
        }

        // submission 
        if(!userFound) {
            isValid = false;
            errorMsg.style.color = "red";
            errorMsg.innerText = "Username or password is incorrect.";
            errorStyle(userEmail, "#email-error", "");
            errorStyle(userPassword, "#password-error", "");
        }

        return isValid;
    }

    userEmail.addEventListener('input', () => resetStyle(userEmail, "#email-error"));
    userPassword.addEventListener('input', () => resetStyle(userPassword, "#password-error"));    
}