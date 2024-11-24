onload = function() {
    const regstrForm = document.forms['regstr-form'];
    const usernameInput = document.forms['regstr-form']['username'];
    const emailInput = document.forms['regstr-form']['email'];
    const passwordInput = document.forms['regstr-form']['password'];
    const confirmPassInput = document.forms['regstr-form']['confirm-pass'];
    const passwordToggle = [passwordInput, confirmPassInput]; // to decide which input was the icon toggled for
    const hideButtons = Array.from(document.getElementsByClassName("hide-pass"));
    const showButtons = Array.from(document.getElementsByClassName("show-pass"));

    // this.localStorage.clear();
    let isValid = false;
    // user entries array
    let userArr = JSON.parse(localStorage.getItem("users") || "[]");

    // Initialize Users
    let user1 = {
        name: "Ahmed Raiyah", 
        email: "ahmed@gmail.com", 
        password: "userPass123$$" 
    };
    let user2 = {
        name: "Mohammed Ahmed", 
        email: "mohamed@gmail.com", 
        password: "userPass123$$"
    };     
    

    userArr.push(user1);
    userArr.push(user2);
    localStorage.setItem("users", JSON.stringify(userArr));

    // to show and hide password input
    hideButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            button.style.display = "none"; // Hide the hide button
            showButtons[index].style.display = "block"; // Show the corresponding show button
            passwordToggle[index].type = "text";
        });
    });
    
    showButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            button.style.display = "none"; // Hide the show button
            hideButtons[index].style.display = "block"; // Show the corresponding hide button
            passwordToggle[index].type = "text";
        });
    });
    
    

    // form submission
    regstrForm.onsubmit = function() {
        isValid = true; // Reset isValid to true for the current submission

        // Username validation
        if (usernameInput.value.trim() === "") { // if input is empty
            errorStyle(usernameInput, "#username-error", "Username is required");
            isValid = false;
        } else if (!checkFullname(usernameInput.value)) { // fullname validation
            errorStyle(usernameInput, "#username-error", "Username is invalid");
            isValid = false;
        }

        if (emailInput.value.trim() === "") { // if input is empty
            errorStyle(emailInput, "#email-error", "Email is required");
            isValid = false;
        } else if (!checkEmail(emailInput.value)) { // email validation
            errorStyle(emailInput, "#email-error", "Email is invalid");
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            errorStyle(passwordInput, "#password-error", "Password is required");
            isValid = false;
        } else if (!passwordValidation(passwordInput.value)) { // password validation
            errorStyle(passwordInput, "#password-error", "Password invalid");
            isValid = false;
        } 

        if (confirmPassInput.value.trim() === "") {
            errorStyle(confirmPassInput, "#confirmPass-error", "Confirm Password is required");
            isValid = false;
        } else if (!confirmPasswordValidation(passwordInput.value, confirmPassInput.value)) { // confirm password validation
            errorStyle(confirmPassInput, "#confirmPass-error", "Password doesn't match");
            isValid = false;
        }

        if (isValid) { // Only create user if all validations pass
            for (let i = 0; i < userArr.length; i++) {
                if (emailInput.value === userArr[i].email) {
                    errorStyle(emailInput, "#email-error", "Email already in use");
                    return false;
                }
            }

            let users = {
                name: usernameInput.value,
                password: passwordInput.value,
                email: emailInput.value,
            };

            userArr.push(users); // array of registered accounts
            localStorage.setItem("users", JSON.stringify(userArr)); // turn array into string
        }

        return isValid; // Return the final validity of the form
    }

    // Resting error input style
    usernameInput.addEventListener('input', () => resetStyle(usernameInput, "#username-error"));
    emailInput.addEventListener('input', () => resetStyle(emailInput, "#email-error"));
    passwordInput.addEventListener('input', () => resetStyle(passwordInput, "#password-error"));
    confirmPassInput.addEventListener('input', () => resetStyle(confirmPassInput, "#confirmPass-error"));
    
}