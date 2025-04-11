// item-details.js
document.addEventListener("DOMContentLoaded", function () {
  // Assume there is an "Add to Cart" button on this page with a distinct identifier
  const addToCartButton = document.querySelector("button.btn-primary.btn-block");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      // The product ID might be stored in a data attribute or retrieved another way
      // Example: using a data attribute "data-product-id" on the button.
      const productId = parseInt(addToCartButton.getAttribute("data-product-id"));
      addToCart(productId);
    });
  }
});
