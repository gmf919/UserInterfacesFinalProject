// checkout.js
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the cart items from localStorage, if none then use an empty array.
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const summaryList = document.getElementById("summary-list");
  const totalPriceElem = document.getElementById("total-price");
  
  let totalPrice = 0;
  
  // Ensure the order summary container exists.
  if (!summaryList) {
    console.error("Order summary list element not found.");
    return;
  }
  
  // For each item in the cart, create an entry in the order summary list.
  cartItems.forEach(item => {
    totalPrice += item.price;
    
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.textContent = item.name;
    
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `$${item.price}`;
    
    listItem.appendChild(priceSpan);
    summaryList.appendChild(listItem);
  });
  
  // Update the total price display.
  if (totalPriceElem) {
    totalPriceElem.textContent = totalPrice.toFixed(2);
  }
  
  // Payment Form Submission: handle the form submission.
  const paymentForm = document.getElementById("payment-form");
  if (paymentForm) {
    paymentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // Add validation and processing as needed.
      // For this demo, simply confirm the order.
      alert("Payment information submitted! Order confirmed.");
      
      // Clear the cart data after successful checkout.
      localStorage.removeItem("cartItems");
      
      // Redirect to an order confirmation page or back to home.
      window.location.href = "confirmation.html"; // Update URL as needed
    });
  }
});

