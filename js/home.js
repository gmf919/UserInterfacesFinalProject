document.addEventListener("DOMContentLoaded", function () {
  console.log("home.js loaded");

  // --- Handle Search Form Submission ---
  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchTerm = document.getElementById("searchInput").value.trim();
      // Redirect to filtered.html with the search term as a query parameter.
      window.location.href = "filtered.html?search=" + encodeURIComponent(searchTerm);
    });
  }

  // --- Existing Code to Display Popular Items ---
  const popularContainer = document.getElementById("popular-items");
  if (!popularContainer) {
    console.error("Element with id 'popular-items' not found.");
    return;
  }

  // Use global function from main.js to get 8 random items
  const popularItems = window.getRandomItems(window.itemsForSale, 8);
  console.log("Selected popular items:", popularItems);

  popularItems.forEach(function (item) {
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
    addToCartBtn.addEventListener("click", function () {
      window.addToCart(item.id);
    });

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(addToCartBtn);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    popularContainer.appendChild(colDiv);
  });
});
