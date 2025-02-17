import {getProphets, displayQuoteModal} from "./script.js";

document.addEventListener("DOMContentLoaded", async () => {
	const prophets = await getProphets();
	displayRandomLatterDaySaintCard(prophets);
	displayRandomBookOfMormonCard(prophets);
	displayTopicFilters(prophets);
});

function displayRandomLatterDaySaintCard(prophets) {
	const latterDaySaints = prophets.filter(
		(prophet) => prophet.affiliation === "Latter-day Saint"
	);
	if (latterDaySaints.length === 0) return; // Handle case where no Latter-day Saints are found

	const randomIndex = Math.floor(Math.random() * latterDaySaints.length);
	const randomProphet = latterDaySaints[randomIndex];
	displayCard(randomProphet, "left", prophets);
}

function displayRandomBookOfMormonCard(prophets) {
	const bookOfMormonFigures = prophets.filter(
		(prophet) => prophet.affiliation === "Book of Mormon"
	);
	if (bookOfMormonFigures.length === 0) return;

	const randomIndex = Math.floor(Math.random() * bookOfMormonFigures.length);
	const randomProphet = bookOfMormonFigures[randomIndex];
	displayCard(randomProphet, "right", prophets); // Image on the right
}

function displayCard(
	prophet,
	imagePosition,
	allProphets,
	selectedTopic = null
) {
	const prophetCards = document.getElementById("prophet-cards");
	const card = document.createElement("div");
	card.classList.add("prophet-card", "grid-container");

	const relevantQuotes = selectedTopic
		? prophet.quotes.filter((quote) => quote.topic === selectedTopic)
		: prophet.quotes;

	const quoteIndex = Math.floor(Math.random() * relevantQuotes.length);
	const randomQuote = relevantQuotes[quoteIndex];

	let cardContent = "";

	if (imagePosition === "left") {
		cardContent = `
			<div class="latter-day-prophet-card">
            	<div class="grid-item image-container">
            	    <img src="${prophet.image}" alt="${prophet.name}">
            	</div>
            	<div class="grid-item text-container">
            	    <h3>${prophet.name}</h3>
            	    <p>"${randomQuote.quote}"</p>
            	    <p class="source"> - ${randomQuote.source}</p>
            	    <button class="topic-button" data-topic="${randomQuote.topic}">${randomQuote.topic}</button> </div>
            	</div>
			</div>
        `;
	} else {
		// imagePosition === "right"
		cardContent = `
			<div class="bom-prophet-card">
            	<div class="grid-item text-container">
            	    <h3>${prophet.name}</h3>
            	    <p>"${randomQuote.quote}"</p>
            	    <p class="source"> - ${randomQuote.source}</p>
            	    <button class="topic-button" data-topic="${randomQuote.topic}">${randomQuote.topic}</button>
            	</div>
            	<div class="grid-item image-container">
            	    <img src="${prophet.image}" alt="${prophet.name}">
            	</div>
			</div>
        `;
	}

	card.innerHTML = cardContent;

	card.querySelector(".topic-button").addEventListener("click", () => {
		filterProphetsByTopic(randomQuote.topic, allProphets);
	});

	prophetCards.appendChild(card);
}

function displayTopicFilters(prophets) {
	const filterButtons = document.getElementById("filter-buttons");
	const topics = [
		...new Set(
			prophets.flatMap((prophet) => prophet.quotes.map((quote) => quote.topic))
		),
	]; // Get unique topics from quotes

	topics.forEach((topic) => {
		const button = document.createElement("button");
		button.textContent = topic;
		button.addEventListener("click", () =>
			filterProphetsByTopic(topic, prophets)
		);
		filterButtons.appendChild(button);
	});
}

function filterProphetsByTopic(topic, prophets) {
	const prophetCards = document.getElementById("prophet-cards");
	prophetCards.innerHTML = ""; // Clear existing cards

	const filteredProphets = prophets.filter((prophet) =>
		prophet.quotes.some((quote) => quote.topic === topic)
	);

	filteredProphets.forEach((prophet) => {
		displayCard(
			prophet,
			Math.random() < 0.5 ? "left" : "right",
			prophets,
			topic
		); // Random image position
	});
}

const menuTogle = document.querySelector("#menuToggle");
const nav = document.querySelector("#navigation");

menuTogle.addEventListener("click", () => {
	nav.classList.toggle("open");
	menuTogle.classList.toggle("open");
});
