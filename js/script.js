// header elements start
const headerHamburger = document.querySelector(".header-hamburger");
const headNavList = document.querySelector(".head-nav-list");
// header elements end

// carousel elements start
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
let totalImages = 0; // Will be updated after images are loaded

// Function to load images dynamically
function loadImages() {
  track.innerHTML = ""; // Clear track before adding new images

  images.forEach((imgSrc) => {
    const item = document.createElement("div");
    item.classList.add("carousel-item");

    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.alt = "Food Image";

    item.appendChild(imgElement);
    track.appendChild(item);
  });

  // Update total image count after loading
  totalImages = images.length;

  // Ensure the carousel starts at the correct position
  updateCarousel();
}

// Get the actual width of the images dynamically
function getImageWidth() {
  const firstImage = document.querySelector(".carousel-item img");
  return firstImage ? firstImage.clientWidth : 300; // Default to 300px if unavailable
}

// Function to update carousel position
function updateCarousel() {
  const imageWidth = getImageWidth();
  track.style.transform = `translateX(${-index * imageWidth}px)`;
}

// carousel elemtents end

// header events start
// Add a click event listener to the header-hamburger div
headerHamburger.addEventListener("click", function () {
  const icon = headerHamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-x");

  headNavList.classList.toggle("hidden");
});
// header events end

// carousel events start

// Load images dynamically
// Move to next image
nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalImages; // Loops back to first image
  updateCarousel();
});

// Move to previous image (Fixed issue where it skipped images)
prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages; // Loops back to last image
  updateCarousel();
});

// Ensure image width updates on window resize
window.addEventListener("resize", updateCarousel);

// Load images on page load
loadImages();
// carousele events end
