let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.querySelector(".cart-container");
const cartTotalElement = document.getElementById("cart-total");

// Function to render cart items dynamically
function renderCart() {
  cartContainer.innerHTML = ""; // Clear existing items before re-rendering

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <div class="cart-img">
        <img src="${item.src}" alt="${item.alt}" />
      </div>
      <div class="cart-details">
        <p class="item-price">&#x20B9; ${item.price}</p>
        <div class="item-options">
          <button class="item-btn decrease-btn" data-index="${index}">-</button>
          <div class="item-qty">${item.qty || 1}</div>
          <button class="item-btn increase-btn" data-index="${index}">+</button>
        </div>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  });

  calculateTotal(); // Update total after rendering
  attachEventListeners();
}

// Function to update the cart and save it to localStorage
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

//function to calculate the total price
function calculateTotal() {
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );
  cartTotalElement.innerHTML = `Total: &#x20B9; <span id="total-amount">${total}</span>`;
  updateCartTotal(total);
}

// Function to attach event listeners to buttons
function attachEventListeners() {
  document.querySelectorAll(".increase-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      cart[index].qty = (cart[index].qty || 1) + 1;
      updateCart();
    });
  });

  document.querySelectorAll(".decrease-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      if (cart[index].qty > 1) {
        cart[index].qty -= 1;
      } else {
        cart.splice(index, 1); // Remove item if quantity reaches 0
      }
      updateCart();
    });
  });
}
// cart checkout total start
function updateCartTotal(total) {
  const totalAmountElement = document.getElementById("total-amount");
  const checkoutButtonContainer = document.getElementById(
    "checkout-button-container"
  );
  // Update the total amount
  totalAmountElement.textContent = total;

  // Remove existing checkout button if it exists
  checkoutButtonContainer.innerHTML = "";

  // Add the "Checkout" button if total is greater than 0
  if (total > 0) {
    const checkoutButton = document.createElement("a");
    checkoutButton.href = "#"; // Default href to prevent navigation
    checkoutButton.textContent = "Check Out";
    checkoutButton.classList.add("checkout-button");
    checkoutButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        window.location.href = "./checkout.html"; // Redirect if logged in
      } else {
        alert("Login first to checkout");
      }
    });

    checkoutButtonContainer.appendChild(checkoutButton);
  }
}
// cart checkout total end
// Initial render of the cart
renderCart();
