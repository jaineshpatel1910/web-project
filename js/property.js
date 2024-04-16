document.addEventListener("DOMContentLoaded", function () {
  const $ = (selector) => document.querySelector(selector);

  const propertyPage = $("#property");

  const currentPage = window.location.pathname;

  if (currentPage === "/webpages/property.html") {
    propertyPage.classList.add("active1");
  }
});
