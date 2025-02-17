import {getProphets, displayQuoteModal} from "./script.js";

document.addEventListener("DOMContentLoaded", async () => {
	const prophets = await getProphets();

	const bookOfMormonProphets = prophets.filter(
		(prophet) => prophet.affiliation == "Latter-day Saint"
	);
	displayFeaturedProphets(bookOfMormonProphets);
});

function displayFeaturedProphets(prophets) {
	const prophetCards = document.getElementById("prophet-cards");
	prophets.forEach((prophet) => {
		const card = document.createElement("div");
		card.classList.add("prophet-card");
		card.innerHTML = `
		<div class="card">
			<div class="img-container">
        		<img src="${prophet.image}" alt="${prophet.name}">
			<div>
        	<h3>${prophet.name}</h3>
		</div>
      `;
		card.addEventListener("click", () => displayQuoteModal(prophet));
		prophetCards.appendChild(card);
	});
}

const menuTogle = document.querySelector("#menuToggle");
const nav = document.querySelector("#navigation");

menuTogle.addEventListener("click", () => {
	nav.classList.toggle("open");
	menuTogle.classList.toggle("open");
});
