document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById("menuToggle");
	const navigation = document.getElementById("navigation");

	// Toggle el menú al hacer clic en el botón
	menuToggle.addEventListener("click", () => {
		navigation.classList.toggle("active");
	});

	const yearSpan = document.getElementById("currentYear");
	const currentYear = new Date().getFullYear();
	if (yearSpan) {
		yearSpan.textContent = currentYear;
	}

	const lastModifiedSpan = document.getElementById("lastModified");
	if (lastModifiedSpan) {
		lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
	}

	const temples = [
		{
			name: "Salt Lake Temple",
			image: "images/temples/salt-lake-temple.jpg",
			alt: "Salt Lake Temple",
			year: 1893,
			location: "Salt Lake City, Utah",
			dedicated: "April 6, 1893",
			president: "Wilford Woodruff",
			style: "Gothic Revival",
			rooms: 3,
			ordinanceRooms: 8,
			totalFloorArea: 253.015,
			height: 222,
			spires: 6,
		},
		{
			name: "Logan Utah Temple",
			image: "images/temples/logan-temple.jpg",
			alt: "Logan Utah Temple",
			year: 1884,
			location: "Logan, Utah",
			dedicated: "May 17, 1884",
			president: "John Taylor",
			style: "Gothic Revival",
			rooms: 4,
			ordinanceRooms: 9,
			totalFloorArea: 119.619,
			height: 170,
			spires: 4,
		},
		{
			name: "Manti Utah Temple",
			image: "images/temples/manti-temple.jpg",
			alt: "Manti Utah Temple",
			year: 1888,
			location: "Manti, Utah",
			dedicated: "May 21, 1888",
			president: "Lorenzo Snow",
			style: "Gothic Revival",
			rooms: 4,
			ordinanceRooms: 9,
			totalFloorArea: 100.373,
			height: 179,
			spires: 4,
		},
		{
			name: "St. George Utah Temple",
			image: "images/temples/st-george-temple.jpg",
			alt: "St. George Utah Temple",
			year: 1877,
			location: "St. George, Utah",
			dedicated: "April 6, 1877",
			president: "Brigham Young",
			style: "Gothic Revival",
			rooms: 4,
			ordinanceRooms: 9,
			totalFloorArea: 110.0,
			height: 175,
			spires: 6,
		},
		{
			name: "Laie Hawaii Temple",
			image: "images/temples/laie-temple.jpg",
			alt: "Laie Hawaii Temple",
			year: 1919,
			location: "Laie, Hawaii",
			dedicated: "November 27, 1919",
			president: "Heber J. Grant",
			style: "Hawaiian",
			rooms: 4,
			ordinanceRooms: 8,
			totalFloorArea: 47.518,
			height: 74,
			spires: 4,
		},
		{
			name: "Cardston Alberta Temple",
			image: "images/temples/cardston-temple.jpg",
			alt: "Cardston Alberta Temple",
			year: 1923,
			location: "Cardston, Alberta, Canada",
			dedicated: "August 26, 1923",
			president: "Heber J. Grant",
			style: "Classical Modern",
			rooms: 4,
			ordinanceRooms: 8,
			totalFloorArea: 88.562,
			height: 85,
			spires: 0,
		},
		{
			name: "Mesa Arizona Temple",
			image: "images/temples/mesa-temple.jpg",
			alt: "Mesa Arizona Temple",
			year: 1927,
			location: "Mesa, Arizona",
			dedicated: "October 23, 1927",
			president: "Heber J. Grant",
			style: "Modern",
			rooms: 4,
			ordinanceRooms: 8,
			totalFloorArea: 113.916,
			height: 50,
			spires: 0,
		},
		{
			name: "Idaho Falls Idaho Temple",
			image: "images/temples/idaho-falls-temple.jpg",
			alt: "Idaho Falls Idaho Temple",
			year: 1945,
			location: "Idaho Falls, Idaho",
			dedicated: "September 23, 1945",
			president: "George Albert Smith",
			style: "Art Deco",
			rooms: 4,
			ordinanceRooms: 9,
			totalFloorArea: 92.36,
			height: 170,
			spires: 1,
		},
		{
			name: "Los Angeles California Temple",
			image: "images/temples/los-angeles-temple.jpg",
			alt: "Los Angeles California Temple",
			year: 1956,
			location: "Los Angeles, California",
			dedicated: "March 11, 1956",
			president: "David O. McKay",
			style: "Modern",
			rooms: 6,
			ordinanceRooms: 11,
			totalFloorArea: 190.614,
			height: 257,
			spires: 1,
		},
		{
			name: "Oakland California Temple",
			image: "images/temples/oakland-temple.jpg",
			alt: "Oakland California Temple",
			year: 1964,
			location: "Oakland, California",
			dedicated: "November 17, 1964",
			president: "David O. McKay",
			style: "Asian Modern",
			rooms: 4,
			ordinanceRooms: 9,
			totalFloorArea: 95.0,
			height: 170,
			spires: 5,
		},
		{
			name: "Ogden Utah Temple",
			image: "images/temples/ogden-temple.jpg",
			alt: "Ogden Utah Temple",
			year: 1972,
			location: "Ogden, Utah",
			dedicated: "January 18, 1972",
			president: "Joseph Fielding Smith",
			style: "Modern",
			rooms: 6,
			ordinanceRooms: 8,
			totalFloorArea: 115.0,
			height: 180,
			spires: 1,
		},
		{
			name: "Provo Utah Temple",
			image: "images/temples/provo-temple.jpg",
			alt: "Provo Utah Temple",
			year: 1972,
			location: "Provo, Utah",
			dedicated: "February 9, 1972",
			president: "Joseph Fielding Smith",
			style: "Modern",
			rooms: 6,
			ordinanceRooms: 8,
			totalFloorArea: 128.325,
			height: 230,
			spires: 1,
		},
		{
			name: "Jordan River Utah Temple",
			image: "images/temples/jordan-river-temple.jpg",
			alt: "Jordan River Utah Temple",
			year: 1981,
			location: "South Jordan, Utah",
			dedicated: "November 16, 1981",
			president: "Spencer W. Kimball",
			style: "Modern",
			rooms: 6,
			ordinanceRooms: 12,
			totalFloorArea: 148.236,
			height: 219,
			spires: 1,
		},
		{
			name: "Bountiful Utah Temple",
			image: "images/temples/bountiful-temple.jpg",
			alt: "Bountiful Utah Temple",
			year: 1995,
			location: "Bountiful, Utah",
			dedicated: "January 8, 1995",
			president: "Howard W. Hunter",
			style: "Modern",
			rooms: 4,
			ordinanceRooms: 8,
			totalFloorArea: 104.0,
			height: 176,
			spires: 1,
		},
		{
			name: "Draper Utah Temple",
			image: "images/temples/draper-temple.jpg",
			alt: "Draper Utah Temple",
			year: 2009,
			location: "Draper, Utah",
			dedicated: "March 20, 2009",
			president: "Thomas S. Monson",
			style: "Modern",
			rooms: 4,
			ordinanceRooms: 8,
			totalFloorArea: 57.0,
			height: 168,
			spires: 1,
		},
		{
			name: "Templo de Quito",
			image: "images/temples/quito-temple.jpg",
			alt: "Templo de Quito",
			year: 2018,
			location: "Quito, Ecuador",
			dedicated: "Agosto 19, 2018",
			president: "Ruseell M. Nelson",
			style: "Moderno",
			rooms: 4,
			ordinanceRooms: 7,
			totalFloorArea: 22.0,
			height: 40,
			spires: 1,
		},
		{
			name: "Templo de Guayaquil",
			image: "images/temples/guayaquil-temple.jpg",
			alt: "Templo de Guayaquil",
			year: 2000,
			location: "Guayaquil, Ecuador",
			dedicated: "Mayo 23, 2000",
			president: "Gordon B. Hinckley",
			style: "Moderno",
			rooms: 4,
			ordinanceRooms: 7,
			totalFloorArea: 36.0,
			height: 58,
			spires: 1,
		},
	];

	const templeContainer = document.getElementById("templeCards");
	const showAll = document.getElementById("all");
	const showOld = document.getElementById("old");
	const showNew = document.getElementById("new");
	const showLarge = document.getElementById("large");
	const showSmall = document.getElementById("small");
	const title = document.getElementById("title");

	function renderTempleCards(filter = "all") {
		templeContainer.innerHTML = "";
		const filteredTemples = temples.filter((temple) => {
			if (filter === "all") return true;
			if (filter === "old") return temple.year < 2000;
			if (filter === "new") return temple.year >= 2000;
			if (filter === "large") return temple.totalFloorArea >= 100;
			if (filter === "small") return temple.totalFloorArea < 100;
		});

		filteredTemples.forEach((temple) => {
			const templeCard = document.createElement("div");
			templeCard.className = "templeCard";
			templeCard.innerHTML = `
                <img src="${temple.image}" alt="${temple.alt}" class="templeImage">
                <div>
                <h3>${temple.name}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Total Floor Area: ${temple.totalFloorArea} sq ft</p>
                </div>
            `;
			templeContainer.appendChild(templeCard);
		});
		if (filter === "all") {
			title.textContent = `All Temples (${filteredTemples.length})`;
		} else if (filter === "old") {
			title.textContent = `Old Temples (${filteredTemples.length})`;
		} else if (filter === "new") {
			title.textContent = `New Temples (${filteredTemples.length})`;
		} else if (filter === "large") {
			title.textContent = `Large Temples (${filteredTemples.length})`;
		} else if (filter === "small") {
			title.textContent = `Small Temples (${filteredTemples.length})`;
		}
	}
	showAll.addEventListener("click", () => renderTempleCards("all"));
	showOld.addEventListener("click", () => renderTempleCards("old"));
	showNew.addEventListener("click", () => renderTempleCards("new"));
	showLarge.addEventListener("click", () => renderTempleCards("large"));
	showSmall.addEventListener("click", () => renderTempleCards("small"));

	renderTempleCards();
});
