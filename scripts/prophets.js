document.addEventListener("DOMContentLoaded", () => {
	const url =
		"https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
	const cards = document.querySelector("#cards");

	async function getProphets(url) {
		const response = await fetch(url);
		const data = await response.json();
		displayProphets(data.prophets);
		console.log(data.prophets);
	}

	function numberPlace(number) {
		let place = "";
		switch (number) {
			case 1:
				place = "st";
				break;
			case 2:
				place = "nd";
				break;
			case 3:
				place = "rd";
				break;
			default:
				place = "th";
				break;
		}
		return place;
	}

	function displayProphets(prophets) {
		prophets.forEach((prophet) => {
			const card = document.createElement("section");

			card.className = "card";
			card.innerHTML = `
                <h2>${prophet.name}</h2>
                <img src="${prophet.imageurl}" alt="Portrait of ${
				prophet.name
			} - ${prophet.order}${numberPlace(
				prophet.order
			)} Latter-day President" class="card-image">
                <div>
                    <h3>${prophet.name}</h3>
                    <p>Birth Date: ${prophet.birthdate}</p>
                    <p>Birth Place: ${prophet.birthplace}</p>
                </div>
            `;
			cards.appendChild(card);
		});
	}

	getProphets(url);
});
