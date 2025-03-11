const headerHamburger = document.querySelector(".header-hamburger");
const headNavList = document.querySelector(".head-nav-list");

// Add a click event listener to the header-hamburger div
headerHamburger.addEventListener("click", function () {
  const icon = headerHamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-x");

  headNavList.classList.toggle("hidden");
});
