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

// menu events start ********************************************************
// Array of beverage data start
const beverages = [
  { src: "./assets/beverages/beverage1.jpg", alt: "Beverage 1", price: 100 },
  { src: "./assets/beverages/beverage2.jpg", alt: "Beverage 2", price: 70 },
  { src: "./assets/beverages/beverage3.jpg", alt: "Beverage 3", price: 120 },
  { src: "./assets/beverages/beverage4.jpg", alt: "Beverage 4", price: 130 },
  { src: "./assets/beverages/beverage5.jpg", alt: "Beverage 5", price: 150 },
  { src: "./assets/beverages/beverage6.jpg", alt: "Beverage 6", price: 100 },
];

const desserts = [
  { src: "./assets/dessert/dessert1.jpg", alt: "Dessert 1", price: 100 },
  { src: "./assets/dessert/dessert2.jpg", alt: "Dessert 2", price: 150 },
  { src: "./assets/dessert/dessert3.jpg", alt: "Dessert 3", price: 130 },
  { src: "./assets/dessert/dessert4.jpg", alt: "Dessert 4", price: 140 },
  { src: "./assets/dessert/dessert5.jpg", alt: "Dessert 5", price: 100 },
  { src: "./assets/dessert/dessert6.jpg", alt: "Dessert 6", price: 70 },
];

const vegItems = [
  { src: "./assets/veg/veg1.jpg", alt: "veg 1", price: 130 },
  { src: "./assets/veg/veg2.jpg", alt: "veg 2", price: 150 },
  { src: "./assets/veg/veg3.jpg", alt: "veg 3", price: 200 },
  { src: "./assets/veg/veg4.jpg", alt: "veg 4", price: 150 },
  { src: "./assets/veg/veg5.jpg", alt: "veg 5", price: 180 },
  { src: "./assets/veg/veg6.jpg", alt: "veg 6", price: 230 },
];

const nonVegItems = [
  { src: "./assets/meat/meat1.jpg", alt: "meat 1", price: 200 },
  { src: "./assets/meat/meat2.jpg", alt: "meat 2", price: 250 },
  { src: "./assets/meat/meat3.jpg", alt: "meat 3", price: 220 },
  { src: "./assets/meat/meat4.jpg", alt: "meat 4", price: 240 },
  { src: "./assets/meat/meat5.jpg", alt: "meat 5", price: 270 },
  { src: "./assets/meat/meat6.jpg", alt: "meat 6", price: 230 },
];

// Array to store cart items
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to dynamically populate a category list
function populateCategory(containerId, items) {
  const container = document.getElementById(containerId);

  items.forEach((item) => {
    const categoryImg = document.createElement("div");
    categoryImg.classList.add("category-img");

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    // Create Add to Cart Icon
    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fas", "fa-shopping-cart", "cart-icon");

    // add click event to add to cart
    cartIcon.addEventListener("click", () => addToCart(item));

    categoryImg.appendChild(img);
    categoryImg.appendChild(cartIcon);
    container.appendChild(categoryImg);
  });
}
function addToCart(item) {
  // Check if item already exists in the cart
  const isItemInCart = cart.some((cartItem) => cartItem.src === item.src);

  if (isItemInCart) {
    window.alert("This item is already in your cart!");
  } else {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
}
// update cart count
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}
updateCartCount();

// Populate each category
populateCategory("beverage-list", beverages);
populateCategory("dessert-list", desserts);
populateCategory("veg-list", vegItems);
populateCategory("non-veg-list", nonVegItems);

document.addEventListener("DOMContentLoaded", function () {
  // Initially show the beverage-list
  document.querySelector(".beverage-list").classList.add("active");

  // Get all category elements
  const categories = document.querySelectorAll(".category");

  // Add click event listeners to each category
  categories.forEach((category) => {
    category.addEventListener("click", function () {
      // Get the id of the clicked category
      const categoryId = this.id;

      // Hide all lists
      document.querySelectorAll(".category-list").forEach((list) => {
        list.classList.remove("active");
      });

      // Show the corresponding list
      if (categoryId === "beverages") {
        document.querySelector(".beverage-list").classList.add("active");
      } else if (categoryId === "desserts") {
        document.querySelector(".dessert-list").classList.add("active");
      } else if (categoryId === "veg") {
        document.querySelector(".veg-list").classList.add("active");
      } else if (categoryId === "non-veg") {
        document.querySelector(".non-veg-list").classList.add("active");
      }
    });
  });
});
// menu events end ********************************************************

document.addEventListener("DOMContentLoaded", function () {
  const loginHeader = document.querySelector(".login-header");
  const loginHeaderIcon = loginHeader ? loginHeader.querySelector("i") : null;

  if (loginHeaderIcon) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find((user) => user.isLoggedIn);

    if (loggedInUser) {
      loginHeaderIcon.classList.replace("fa-right-to-bracket", "fa-power-off");

      // Remove anchor tag wrapper
      const parentAnchor = loginHeaderIcon.closest("a");
      if (parentAnchor) {
        parentAnchor.replaceWith(loginHeaderIcon);
      }

      loginHeaderIcon.addEventListener("click", function () {
        users = users.map((user) => ({ ...user, isLoggedIn: false }));
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("loggedInUser");
        alert("Logged out successfully!");
        window.location.reload(); // Ensure UI updates immediately
      });
    }
  }
});
