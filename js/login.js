// login.js
document.addEventListener("DOMContentLoaded", function () {
  // Check if login fields are present
  if (document.getElementById("emailInput") && document.getElementById("passwordInput")) {
    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;
      
      let storedUser = localStorage.getItem("userAccount");
      if (storedUser) {
        storedUser = JSON.parse(storedUser);
      }
      
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
        window.location.href = "home.html";  // Redirect to the home page after successful login
      } else {
        alert("Invalid credentials. Please try again or create an account.");
      }
    });

    // Handle Create Account button redirection
    const createAccountBtn = document.querySelector("button.btn-secondary.btn-block");
    if (createAccountBtn) {
      createAccountBtn.addEventListener("click", function () {
        window.location.href = "create-account.html";
      });
    }
  }
});
