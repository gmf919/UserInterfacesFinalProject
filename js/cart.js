// cart.js
document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  console.log("Cart items loaded in cart.js:", cartItems);

  const cartContainer = document.getElementById("cart-items");
  const cartTotalElem = document.getElementById("cart-total");
  
  if (!cartContainer) {
    console.error("Cart container (with id 'cart-items') not found.");
    return;
  }
  
  cartContainer.innerHTML = "";
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalPrice += item.price;

    const cartItemRow = document.createElement("div");
    cartItemRow.className = "row cart-item align-items-center mb-2";
    
    const nameCol = document.createElement("div");
    nameCol.className = "col-md-6";
    nameCol.textContent = item.name;
    
    const priceCol = document.createElement("div");
    priceCol.className = "col-md-3";
    priceCol.textContent = `$${item.price}`;
    
    const removeCol = document.createElement("div");
    removeCol.className = "col-md-3 text-right";
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function () {
      // Remove item and update localStorage
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      location.reload();
    });
    
    removeCol.appendChild(removeBtn);
    cartItemRow.appendChild(nameCol);
    cartItemRow.appendChild(priceCol);
    cartItemRow.appendChild(removeCol);
    cartContainer.appendChild(cartItemRow);
  });
  
  if (cartTotalElem) {
    cartTotalElem.textContent = totalPrice.toFixed(2);
  }
});
