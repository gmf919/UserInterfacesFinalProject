document.addEventListener("DOMContentLoaded", function(){
  // Get the search term from the URL query parameters.
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get("search") || "";
  console.log("Filtered search term:", searchTerm);

  const filteredContainer = document.getElementById("filtered-items");
  if (!filteredContainer) {
    console.error("No container found for filtered items.");
    return;
  }

  // Filter the global product list (from main.js) based on the search term.
  const filteredItems = window.itemsForSale.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("Filtered Items:", filteredItems);

  // If no items match, display a message.
  if (filteredItems.length === 0) {
    filteredContainer.innerHTML = `<p class="col-12 text-center">No products found matching "${searchTerm}"</p>`;
    return;
  }

  // For each filtered item, create and append a card.
  filteredItems.forEach(item => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-3 col-sm-6 mb-3";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-center";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = item.name;

    const price = document.createElement("p");
    price.className = "card-text";
    price.textContent = `$${item.price}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "btn btn-primary btn-block";
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", function(){
      window.addToCart(item.id);
    });

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(addToCartBtn);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    filteredContainer.appendChild(colDiv);
  });
});
