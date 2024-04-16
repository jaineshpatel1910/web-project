document.addEventListener("DOMContentLoaded", function () {
  const $ = (selector) => document.querySelector(selector);

  const homePage = $("#home");
  const servicesPage = $("#services");
  const loginButton = $("#login-button");
  

  const currentPage = window.location.pathname;

  if (currentPage === "/index.html") {
    homePage.classList.add("active");
  }
  if (currentPage === "/webpages/services.html") {
    servicesPage.classList.add("active");
  }

  loginButton.addEventListener("click", function () {
    window.location.href = "/webpages/login.html";
  });
});
