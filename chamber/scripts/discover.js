document.addEventListener("DOMContentLoaded", function () {
	// Visit Message Logic
	const visitMessageDiv = document.getElementById("visit-message");
	const lastVisit = localStorage.getItem("lastVisit");
	const currentDate = Date.now();
	const msToDays = 86400000; // milliseconds in a day

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

	// Card Data (Replace with your 8 items of interest) - Ideally load from JSON, but for simplicity in one file:
	const cardData = [
		{
			title: "Item 1 Title",
			image: "images/item1.webp",
			address: "123 Main St, City, State",
			description:
				"Description for item 1. This is a brief overview of what makes this place interesting.",
		},
		{
			title: "Item 2 Title",
			image: "images/item2.webp",
			address: "456 Oak Ave, City, State",
			description:
				"Description for item 2. Explore the unique features of this location and why it's worth visiting.",
		},
		{
			title: "Item 3 Title",
			image: "images/item3.webp",
			address: "789 Pine Ln, City, State",
			description:
				"Description for item 3. Discover the history and significance of this landmark in our area.",
		},
		{
			title: "Item 4 Title",
			image: "images/item4.webp",
			address: "101 Elm Rd, City, State",
			description:
				"Description for item 4. Learn about the attractions and activities available at this popular spot.",
		},
		{
			title: "Item 5 Title",
			image: "images/item5.webp",
			address: "222 Maple Dr, City, State",
			description:
				"Description for item 5. Get insights into the local culture and community at this interesting place.",
		},
		{
			title: "Item 6 Title",
			image: "images/item6.webp",
			address: "333 Birch Ct, City, State",
			description:
				"Description for item 6. Find out why this is a must-see destination for visitors and locals alike.",
		},
		{
			title: "Item 7 Title",
			image: "images/item7.webp",
			address: "444 Willow Way, City, State",
			description:
				"Description for item 7. Experience the beauty and charm of this unique location in our area.",
		},
		{
			title: "Item 8 Title",
			image: "images/item8.webp",
			address: "555 Cedar Blvd, City, State",
			description:
				"Description for item 8. Uncover the hidden gems and local favorites that make this place special.",
		},
	];

	const gallerySection = document.querySelector(".card-gallery");

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

	// Image Hover Effect (Large Screens - CSS only approach for simplicity and performance)
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
