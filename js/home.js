// home.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("home.js loaded");

  // Find the container element
  const popularContainer = document.getElementById("popular-items");
  if (!popularContainer) {
    console.error("Element with id 'popular-items' not found. Check your HTML.");
    return;
  }

  // Get 8 random products from the global itemsForSale array
  const popularItems = window.getRandomItems(window.itemsForSale, 8);
  console.log("Selected popular items:", popularItems);

  // Dynamically create a card for each selected product
  popularItems.forEach(function (item) {
    // Create a column container using Bootstrap classes
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-3 col-sm-6 mb-3";
    
    // Create a card element for the item
    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";
    
    // Create a card body for content
    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-center";
    
    // Create element for the product name
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = item.name;
    
    // Create element for the product price
    const price = document.createElement("p");
    price.className = "card-text";
    price.textContent = `$${item.price}`;
    
    // Create "Add to Cart" button
    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "btn btn-primary btn-block";
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", function () {
      // Assume addToCart is defined globally in main.js
      window.addToCart(item.id);
    });
    
    // Assemble card components
    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(addToCartBtn);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    popularContainer.appendChild(colDiv);
  });
});
