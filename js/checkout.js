// checkout.js
document.addEventListener("DOMContentLoaded", function () {
  // Check that we are on the checkout page (e.g., by title or other selectors)
  if (document.title.indexOf("Checkout") !== -1) {
    const checkoutForm = document.querySelector("form");
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const cardNumber = document.getElementById("cardNumber").value;
      const expirationDate = document.getElementById("expirationDate").value;
      const cvv = document.getElementById("cvv").value;
      
      if (!cardNumber.trim() || !expirationDate.trim() || !cvv.trim()) {
        alert("Please fill in all payment fields.");
        return;
      }
      
      alert("Payment information submitted! Order confirmed.");
      // Clear the cart after a successful checkout
      localStorage.removeItem("cartItems");
      window.location.href = "confirmation.html";  // Redirect to order confirmation
    });
  }
});
