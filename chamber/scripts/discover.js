document.addEventListener("DOMContentLoaded", async function () {
  const visitMessageDiv = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentDate = Date.now();
  const msToDays = 86400000; // milliseconds in a day

  const menuToggle = document.querySelector("#menuToggle");
  const nav = document.querySelector("#navigation");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  if (!lastVisit) {
    visitMessageDiv.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const daysSinceLastVisit = Math.floor(
      (currentDate - parseInt(lastVisit)) / msToDays
    );
    if (daysSinceLastVisit < 1) {
      visitMessageDiv.textContent = "Back so soon! Awesome!";
    } else {
      const dayWord = daysSinceLastVisit === 1 ? "day" : "days";
      visitMessageDiv.textContent = `You last visited ${daysSinceLastVisit} ${dayWord} ago.`;
    }
  }
  localStorage.setItem("lastVisit", currentDate);

  async function fetchData() {
    try {
      const response = await fetch("data/discover.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data: ", error);
      return [];
    }
  }

  const gallerySection = document.querySelector(".card-gallery");

  // Get data and populate cards
  fetchData().then((cardData) => {
    cardData.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
              <h2>${item.title}</h2>
              <figure>
                  <img src="${item.image}" alt="${item.title}" loading="lazy" width="300" height="200">
              </figure>
              <address>${item.address}</address>
              <p>${item.description}</p>
              <button>Learn More</button>
          `;
      gallerySection.appendChild(card);
    });
  });

  const styleSheet = document.createElement("style");
  styleSheet.innerText = `@media (min-width: 1025px) {
        .card figure img:hover {
            opacity: 0.8; /* Example effect - adjust as you like */
            transform: scale(1.05); /* Example effect - adjust as you like */
            transition: opacity 0.3s ease, transform 0.3s ease; /* Smooth transition */
        }
     }`;
  document.head.appendChild(styleSheet);
});
