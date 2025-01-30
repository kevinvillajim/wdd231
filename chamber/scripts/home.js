document.addEventListener("DOMContentLoaded", () => {
	const menuTogle = document.querySelector("#menuToggle");
	const nav = document.querySelector("#navigation");

	menuTogle.addEventListener("click", () => {
		nav.classList.toggle("open");
		menuTogle.classList.toggle("open");
	});

	// Fetch Weather Data
	const weatherSection = document.getElementById("weather-data");
	const apiKey = "fdc81c13f3bc0e408acd4f11ab5e2379";
	const city = "Quito";
	// const apiTest = "/data/apiTest.json";
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			weatherSection.innerHTML = `
				<img src="https://openweathermap.org/img/wn/${
					data.weather[0].icon
				}@4x.png" alt="${data.weather[0].description}" />
			<div>
                <p>Temperature: <b>${Math.round(data.main.temp)}</b> °C</p>
                <p>Weather: ${data.weather.map((w) => w.main).join(", ")}</p>
				<p>High: ${data.main.temp_max}°C</p>
				<p>Low: ${data.main.temp_min}°C</p>
				<p>Humidity: ${data.main.humidity}%</p>
				<p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
				<p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
			<div>
            `;
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
