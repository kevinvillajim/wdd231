document.addEventListener("DOMContentLoaded", () => {
	const menuTogle = document.querySelector("#menuToggle");
	const nav = document.querySelector("#navigation");

	const directoryCards = document.querySelector("#directoryCards");
	const toggleGrid = document.querySelector("#filterToggle");
	const toggleIcon = document.querySelector("#toggleIcon");
	let isGridView = true;

	menuTogle.addEventListener("click", () => {
		nav.classList.toggle("open");
		menuTogle.classList.toggle("open");
	});

	async function fetchMembers() {
		try {
			const response = await fetch("data/members.json");
			const members = await response.json();
			displayMembers(members, isGridView);
		} catch (error) {
			console.error("Error fetching members:", error);
		}
	}
	function displayMembers(members, grid) {
		directoryCards.innerHTML = members
			.map(
				(member) =>
					`<div class="${grid ? "card" : "list-item"}">
            <img src="${member.image}" alt="${member.name}" class="img-cards"/>
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
          </div>`
			)
			.join("");
	}

	toggleGrid.addEventListener("click", () => {
		isGridView = !isGridView;
		toggleIcon.textContent = isGridView ? "view_list" : "grid_view";
		fetchMembers();
	});

	fetchMembers();
});
