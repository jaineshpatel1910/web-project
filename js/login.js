document.addEventListener("DOMContentLoaded", function () {
    const $ = (selector) => document.querySelector(selector);

    const loginButton = $("#login-button");
    const usernameInput = $("input[placeholder='Username']");
    const passwordInput = $("input[placeholder='Password']");
    const usernameErrorMessage = $("#username-error-message");
    const passwordErrorMessage = $("#password-error-message");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        // Reset error styles and messages
        usernameInput.classList.remove("error-border");
        passwordInput.classList.remove("error-border");
        usernameErrorMessage.textContent = ""; // Clear previous error message
        passwordErrorMessage.textContent = ""; // Clear previous error message

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        if (username === "") {
            usernameInput.classList.add("error-border");
            usernameErrorMessage.textContent = "Please enter your username.";
            isValid = false;
        }

        if (password === "") {
            passwordInput.classList.add("error-border");
            passwordErrorMessage.textContent = "Please enter your password.";
            isValid = false;
        }

        if (password.length < 6) {
            passwordInput.classList.add("error-border");
            passwordErrorMessage.textContent =
                "Password must be 6 characters long.";
            isValid = false;
        }

        if (isValid) {
            // If all validations pass, you can proceed with form submission
            // For now, I'll just log a message
            console.log("Form submitted successfully!");
            window.location.href = "../index.html";
        }
    });
});
