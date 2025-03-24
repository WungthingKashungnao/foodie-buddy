document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const isLoggedIn = false;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Retrieve existing users from localStorage or initialize empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Create user object
    const userDetails = {
      firstName,
      lastName,
      email,
      password,
      isLoggedIn,
    };

    // Add new user to the array
    users.push(userDetails);

    // Store updated users list in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    form.reset(); // Clear the form

    // Redirect to index.html
    window.location.href = "./login.html";
  });
});
