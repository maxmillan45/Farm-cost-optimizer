const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("newsSearch");

// Local array of news articles
const articles = [
  {
    title: "New Maize Variety Launched",
    description: "High-yield maize is now available for farmers in Nairobi.",
    url: "#",
    image: "assets/maize.jpg",
    tags: ["maize", "Nairobi", "farming"]
  },
  {
    title: "Fertilizer Discount This Month",
    description: "Get up to 20% off on fertilizers at local agri-shops.",
    url: "#",
    image: "assets/fertilizer.jpg",
    tags: ["fertilizer", "discount", "Kenya"]
  },
  {
    title: "Irrigation Tips for Small Farms",
    description: "Learn how to save water and improve crop yield.",
    url: "#",
    image: "assets/irrigation.jpg",
    tags: ["irrigation", "farming"]
  },
  {
    title: "Pest Control Methods",
    description: "Eco-friendly ways to protect your crops from pests.",
    url: "#",
    image: "assets/pest.jpg",
    tags: ["pests", "crops", "farming"]
  },
  {
    title: "Market Prices Update",
    description: "Check the latest market prices for maize, beans, and vegetables.",
    url: "#",
    image: "assets/market.jpg",
    tags: ["market", "prices", "Kenya"]
  }
];

// Function to display articles
function displayNews(filteredArticles) {
  newsContainer.innerHTML = "";

  if (filteredArticles.length === 0) {
    newsContainer.innerHTML = `<p class="text-center text-red-500 col-span-full">No news found.</p>`;
    return;
  }

  filteredArticles.forEach(article => {
    const card = document.createElement("div");
    card.className = "border rounded shadow hover:shadow-lg transition p-4 bg-white flex flex-col";

    card.innerHTML = `
      ${article.image ? `<img src="${article.image}" class="w-full h-40 object-cover rounded mb-3"/>` : ""}
      <h3 class="text-lg font-semibold text-green-700 mb-2">${article.title}</h3>
      <p class="text-gray-700 flex-grow">${article.description}</p>
      <a href="${article.url}" target="_blank" class="mt-3 text-blue-500 underline">Read More</a>
    `;

    newsContainer.appendChild(card);
  });
}

// Live search
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(query) ||
    article.description.toLowerCase().includes(query) ||
    article.tags.some(tag => tag.toLowerCase().includes(query))
  );
  displayNews(filtered);
});

// Initial display
displayNews(articles);
