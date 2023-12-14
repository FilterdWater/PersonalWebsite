document.addEventListener("DOMContentLoaded", function () {
  const btnMobileMenu = document.getElementById("btnMobileMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  btnMobileMenu.addEventListener("click", function () {
    // Toggle the 'hidden' class
    mobileMenu.classList.toggle("hidden");
  });
});
