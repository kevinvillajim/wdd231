document.addEventListener("DOMContentLoaded", () => {
	// Handle copyright year dynamically
	const yearSpan = document.getElementById("year");
	const currentYear = new Date().getFullYear();
	if (yearSpan) {
		yearSpan.textContent = currentYear;
	}

	// Handle last modified date
	const lastModifiedSpan = document.getElementById("lastModified");
	if (lastModifiedSpan) {
		lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
	}

	// Courses and Filters
	const courses = [
		{
			code: "WDD230",
			name: "Web Frontend Development",
			completed: false,
			class: "WDD",
			credits: 3,
		},
		{
			code: "CSE121",
			name: "Introduction to Programming",
			completed: true,
			class: "CSE",
			credits: 4,
		},
		{
			code: "CSE340",
			name: "Database Design",
			completed: false,
			class: "CSE",
			credits: 3,
		},
	];

	const courseContainer = document.getElementById("courseCards");
	const filterButtons = document.querySelectorAll("#courseFilters button");

	function renderCourses(filter = "all") {
		courseContainer.innerHTML = "";
		const filteredCourses = courses.filter((course) => {
			if (filter === "all") return true;
			return filter === "completed" ? course.completed : !course.completed;
		});

		filteredCourses.forEach((course) => {
			const courseCard = document.createElement("div");
			courseCard.className = "courseCard";
			if (course.completed) {
				courseCard.classList.add("completed");
			}
			courseCard.innerHTML = `
                    <h3>${course.name}</h3>
                    <p>Code: ${course.code}</p>
                    <p>Credits: ${course.credits}</p>
                `;
			courseContainer.appendChild(courseCard);
		});
	}

	filterButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const filter = button.dataset.filter;
			renderCourses(filter);
		});
	});

	renderCourses();
});
