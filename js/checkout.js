document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("checkoutForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting normally
      alert("Order successfully placed!");
      // this.reset(); // Reset the form fields
    });
});
