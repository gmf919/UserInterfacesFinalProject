// main.js
window.itemsForSale = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: parseFloat((Math.random() * 90 + 10).toFixed(2))
}));

window.getRandomItems = function(array, count) {
  let result = [];
  let copy = array.slice();
  for (let i = 0; i < count && copy.length > 0; i++) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy[index]);
    copy.splice(index, 1);
  }
  return result;
};

window.addToCart = function(productId) {
  const product = window.itemsForSale.find(item => item.id === productId);
  if (!product) {
    alert("Product not found.");
    return;
  }
  
  // Retrieve current cart from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  console.log("Cart before adding:", cartItems);
  
  // Add the product and update localStorage
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
  console.log("Cart after adding:", JSON.parse(localStorage.getItem("cartItems")));
  alert(`${product.name} added to cart!`);
};

console.log("Items for Sale:", window.itemsForSale);
