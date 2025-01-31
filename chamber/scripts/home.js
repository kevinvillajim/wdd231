document.addEventListener("DOMContentLoaded", () => {
	const menuTogle = document.querySelector("#menuToggle");
	const nav = document.querySelector("#navigation");

	menuTogle.addEventListener("click", () => {
		nav.classList.toggle("open");
		menuTogle.classList.toggle("open");
	});

	function getDays(index) {
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		return ["Today", days[(index + 1) % 7], days[(index + 2) % 7]];
	}

	const todayIndex = getDays(new Date().getDay());

	// Fetch Weather Data
	const weatherSection = document.getElementById("weather-data");
	const weatherForecast = document.getElementById("forecast-data");
	const apiKey = "fdc81c13f3bc0e408acd4f11ab5e2379";
	const lat = -0.2299;
	const lon = -78.5249;
	const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=24&appid=${apiKey}&units=metric`;
	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			const today = data.list[0];
			weatherSection.innerHTML = `
				<img src="https://openweathermap.org/img/wn/${
					today.weather[0].icon
				}@4x.png" alt="${today.weather[0].description}" />
				<div>
					<p>Temperature: <b>${Math.round(today.main.temp)}</b> °C</p>
					<p>Weather: ${
						today.weather[0].description.charAt(0).toUpperCase() +
						today.weather[0].description.slice(1)
					}</p>
					<p>High: ${today.main.temp_max}°C</p>
					<p>Low: ${today.main.temp_min}°C</p>
					<p>Humidity: ${today.main.humidity}%</p>
				</div>
            `;

			// Obtener el clima de los próximos 3 días (cada 24 horas)
			const dailyForecast = data.list
				.filter((item, index) => index % 8 === 0)
				.slice(0, 3);

			weatherForecast.innerHTML = dailyForecast
				.map(
					(day, i) => `
					<p>${todayIndex[i]}: <b>${
						day.weather[0].description.charAt(0).toUpperCase() +
						day.weather[0].description.slice(1)
					}</b> (${Math.round(day.main.temp)}°C)</p>
				`
				)
				.join("");
		})
		.catch((error) => console.error("Error fetching weather data:", error));

	// Fetch and Display Spotlights
	const spotlightsSection = document.getElementById("spotlights");
	fetch("data/members.json")
		.then((response) => response.json())
		.then((data) => {
			const eligibleMembers = data.filter(
				(member) => member.membershipLevel >= 2
			);

			const selectedMembers = eligibleMembers
				.sort(() => 0.5 - Math.random())
				.slice(0, 3);

			spotlightsSection.innerHTML = selectedMembers
				.map(
					(member) => `
				<div class="spotlight-card">
					<div class="title-spotlight">
						<h2>${member.name}</h2>
						<p>${member.address}</p>
					</div>
					<div class="spotlight-content">
						<img src="${member.image}" alt="${member.name} - logo" />
						<aside>
							<p>EMAIL: <span>${member.email}</span></p>
							<p>PHONE: <span>${member.phone}</span></p>
							<p>URL: <span>${member.website}</span></p>
						</aside>
					</div>
				</div>
            `
				)
				.join("\n");
		})
		.catch((error) => console.error("Error loading spotlights:", error));
});
