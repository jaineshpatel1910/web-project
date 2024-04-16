document.addEventListener("DOMContentLoaded", function () {
  const $ = (selector) => document.querySelector(selector);

  const contactPage = $("#contact-link");
  const currentPage = window.location.pathname;

  if (currentPage === "/webpages/contact.html") {
    contactPage.classList.add("active");
  }

  const contactForm = $("#contact_form");
  const fullnameInput = $("input[name='fullname']");
  const emailInput = $("input[name='email']");
  const messageTextarea = $("textarea[name='message']");

  const fullnameErrorMessage = $("#fullname-error-message");
  const emailErrorMessage = $("#email-error-message");
  const messageErrorMessage = $("#message-error-message");


  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    fullnameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageTextarea.classList.remove("error-border");

    // Get the values entered by the user
    const fullnameValue = fullnameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageTextarea.value.trim();

    let isValid = true;
    // Validate form fields
    if (fullnameValue === "") {
      fullnameInput.classList.add("error-border");
      fullnameErrorMessage.textContent = "Please enter your fullname.";
      isValid = false;
    }

    if (emailValue === "" || !isValidEmail(email)) {
      emailInput.classList.add("error-border");
      emailErrorMessage.textContent = "Please enter your email.";
      isValid = false;
    }

    if (messageValue === "") {
      messageTextarea.classList.add("error-border");
      messageErrorMessage.textContent = "Please enter your message.";
      isValid = false;
    }

    if (!isValid) return
    if (isValid) {
      console.log("Form submitted successfully!");
    }

    document.getElementById("contact_form").submit();
  }

  contactForm.addEventListener("submit", submitForm);

  // Function to validate email format
  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
});
