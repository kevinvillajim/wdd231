export async function getProphets() {
	try {
		const response = await fetch("data/prophets.json");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching prophets:", error);
		return [];
	}
}

export function displayQuoteModal(prophet) {
	const modal = document.getElementById("quote-modal");
	const modalQuote = document.getElementById("modal-quote");
	const modalSource = document.getElementById("modal-source");
	const randomQuote =
		prophet.quotes[Math.floor(Math.random() * prophet.quotes.length)];

	modalQuote.textContent = randomQuote.quote;
	modalSource.textContent = randomQuote.source;
	modal.style.display = "block";

	const closeButton = document.querySelector(".close-button");
	closeButton.addEventListener("click", () => {
		modal.style.display = "none";
	});

	window.addEventListener("click", (event) => {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});
}
