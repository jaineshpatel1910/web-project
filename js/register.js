document.addEventListener("DOMContentLoaded", function () {
  const $ = (selector) => document.querySelector(selector);

  const loginButton = $("#login-button");
  const nameInput = $("input[placeholder='Name']");
  const passwordInput = $("input[placeholder='Password']");
  const confirmPasswordInput = $("input[placeholder='Confirm password']");
  const nameErrorMessage = $("#name-error-message");
  const passwordErrorMessage = $("#password-error-message");
  const confirmPasswordErrorMessage = $("#confirm-password-error-message");
  const form = $("form");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Reset error styles
    nameInput.classList.remove("error-border");
    passwordInput.classList.remove("error-border");
    confirmPasswordInput.classList.remove("error-border");
    nameErrorMessage.textContent = "";
    passwordErrorMessage.textContent = "";
    confirmPasswordErrorMessage.textContent = "";

    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    let isValid = true;

    if (name === "") {
      nameInput.classList.add("error-border");
      nameErrorMessage.textContent = "Please enter your name.";
      isValid = false;
    }

    if (password === "") {
      passwordInput.classList.add("error-border");
      passwordErrorMessage.textContent =
        "Please enter password.";
      isValid = false;
    }

    if (password.length < 6) {
      passwordInput.classList.add("error-border");
      passwordErrorMessage.textContent =
        "Password must be 6 characters long.";
      isValid = false;
    }

    if (confirmPassword.length < 6) {
      confirmPasswordInput.classList.add("error-border");
      confirmPasswordErrorMessage.textContent =
        "Confirm Password must be 6 characters long.";
      isValid = false;
    }

    if (password !== confirmPassword) {
      confirmPasswordInput.classList.add("error-border");
      confirmPasswordErrorMessage.textContent = "Passwords does not match.";
      isValid = false;
    }

    if (isValid) {
      // If all validations pass, you can proceed with form submission
      window.location.href = "../index.html";
      // form.submit();
    }
  });
});