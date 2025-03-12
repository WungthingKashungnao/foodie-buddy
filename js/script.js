// header elements start *************************************
const headerHamburger = document.querySelector(".header-hamburger");
const headNavList = document.querySelector(".head-nav-list");
// header elements end ********************************************

// home elements start **********************************************
const track = document.querySelector(".carousel-track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Image sources
const images = [
  "assets/home carousel food/food1.jpg",
  "assets/home carousel food/food2.jpg",
  "assets/home carousel food/food3.jpg",
  "assets/home carousel food/food4.jpg",
  "assets/home carousel food/food5.jpg",
  "assets/home carousel food/food6.jpg",
  "assets/home carousel food/food7.jpg",
  "assets/home carousel food/food8.jpg",
  "assets/home carousel food/food9.jpg",
  "assets/home carousel food/food10.jpg",
  "assets/home carousel food/food11.jpg",
  "assets/home carousel food/food12.jpg",
  "assets/home carousel food/food13.jpg",
];
let index = 0; // Track current image index

// Load images dynamically
function loadImages() {
  images.forEach((imgSrc) => {
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.classList.add("carousel-item");
    track.appendChild(imgElement);
  });

  // Ensure track width is set correctly
  track.style.width = `${images.length * 100}%`;
}

// Ensure images load before updating
window.onload = function () {
  loadImages();
  setTimeout(() => updateCarousel(), 500);
};
// Update carousel position
function updateCarousel() {
  track.style.transform = `translateX(${-index * 100}%)`;
}
// home elemtents end ****************************************

// header events start ***********************************
// Add a click event listener to the header-hamburger div
headerHamburger.addEventListener("click", function () {
  const icon = headerHamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-x");

  headNavList.classList.toggle("hidden");
});
// header events end ***************************************

// home events start **************************************
// Update carousel position
function updateCarousel() {
  track.style.transform = `translateX(${-index * 100}%)`;
}

// Next & Prev Button Actions
nextBtn.addEventListener("click", () => {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0; // Loop back to first image
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1; // Loop back to last image
  }
  updateCarousel();
});
// carousele events end
// home events end *************************************************
