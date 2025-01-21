const mainnav = document.querySelector("#navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
	mainnav.classList.toggle("show");
	hambutton.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
	// Handle copyright year dynamically
	const yearSpan = document.getElementById("currentYear");
	const currentYear = new Date().getFullYear();
	if (yearSpan) {
		yearSpan.textContent = currentYear;
	}

	const menu = document.getElementById("menu");
	const navigation = document.getElementById("navigation");

	menu.addEventListener("click", () => {
		navigation.classList.toggle("show");
		menu.classList.toggle("show");
	});

	// Handle last modified date
	const lastModifiedSpan = document.getElementById("lastModified");
	if (lastModifiedSpan) {
		lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
	}

	// Courses and Filters
	const courses = [
		{code: "CSE 110", completed: true, class: "CSE", credits: 3},
		{code: "WDD 130", completed: true, class: "WDD", credits: 3},
		{code: "CSE 111", completed: true, class: "CSE", credits: 3},
		{code: "CSE 210", completed: false, class: "CSE", credits: 3},
		{code: "WDD 131", completed: true, class: "WDD", credits: 3},
		{code: "WDD 210", completed: false, class: "WDD", credits: 3},
	];

	const courseContainer = document.getElementById("courseCards");
	const showAllButton = document.getElementById("showAll");
	const showWDDButton = document.getElementById("showWDD");
	const showCSEButton = document.getElementById("showCSE");
	const credits = document.getElementById("creditCount");

	function renderCourses(filter = "all") {
		courseContainer.innerHTML = "";

		const filteredCourses = courses.filter((course) => {
			if (filter === "all") return true;
			return course.class === filter;
		});

		filteredCourses.forEach((course) => {
			const courseCard = document.createElement("div");
			courseCard.className = "courseCard";
			courseCard.style.backgroundColor = course.completed
				? "Green"
				: "white";
			courseCard.style.color = course.completed ? "white" : "black";
			courseCard.innerHTML = `
        <h3>${course.code}</h3>
        <p>Class: ${course.class}</p>
        <p>Status: ${course.completed ? "Completed" : "Incomplete"}</p>
        <p>Credits: ${course.credits}</p>
      `;
			courseContainer.appendChild(courseCard);
		});
		countCredits(filter);
	}

	function countCredits(filter = "all") {
		let totalCredits = 0;
		courses.forEach((course) => {
			if (course.completed && (filter === "all" || course.class === filter)) {
				totalCredits += course.credits;
			}
		});
		credits.textContent = totalCredits;
	}

	showAllButton.addEventListener("click", () => renderCourses("all"));
	showWDDButton.addEventListener("click", () => renderCourses("WDD"));
	showCSEButton.addEventListener("click", () => renderCourses("CSE"));

	// Initial render of all courses
	renderCourses();
});
