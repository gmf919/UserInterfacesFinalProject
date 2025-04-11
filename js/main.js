// main.js

// Define a list of 50 sample items with a unique id, name, and random price between 10 and 100.
// Expose this array globally via the window object.
window.itemsForSale = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: parseFloat((Math.random() * 90 + 10).toFixed(2))
}));

// Utility function: Get N random unique items from an array.
// Exposed globally via the window object so other files can use it.
window.getRandomItems = function(array, count) {
  let result = [];
  let copy = array.slice(); // Copy the array so the original remains unchanged
  for (let i = 0; i < count && copy.length > 0; i++) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy[index]);
    copy.splice(index, 1); // Remove the chosen item
  }
  return result;
};

// Expose addToCart so that other files (like home.js and item-details.js) can use it.
window.addToCart = function(productId) {
  const product = window.itemsForSale.find(item => item.id === productId);
  if (!product) {
    alert("Product not found.");
    return;
  }
  
  // Retrieve the current cart from localStorage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`${product.name} added to cart!`);
};

// Optional: Log the created items for debugging purposes
console.log("Items for Sale:", window.itemsForSale);
