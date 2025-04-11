// cart.js
document.addEventListener("DOMContentLoaded", function () {
  // Example: Add remove functionality to buttons with class "btn-danger" within each cart item
  const removeButtons = document.querySelectorAll(".btn-danger");
  removeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const cartItem = btn.closest(".cart-item");
      if (cartItem) {
        cartItem.remove();
        // Here you would also update the cart data in localStorage as needed.
      }
    });
  });

  // Example: Handle "Go to Checkout" button click.
  const checkoutButton = document.querySelector("button.btn-primary.btn-lg");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function () {
      window.location.href = "checkout.html";
    });
  }
});
