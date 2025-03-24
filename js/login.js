document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Please enter your email and password.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex === -1) {
      alert("No account found with this email. Please register first.");
      return;
    }

    if (users[userIndex].password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    // Set isLoggedIn to true for the current user and false for others
    users = users.map((user, index) => ({
      ...user,
      isLoggedIn: index === userIndex,
    }));

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(users[userIndex]));

    alert("Login successful!");
    window.location.href = "./index.html";
  });
});
