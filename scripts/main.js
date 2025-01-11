document.addEventListener("DOMContentLoaded", () => {
  // Handle copyright year dynamically
  const yearSpan = document.getElementById("currentYear");
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
    { code: "CSE 110", completed: true, class: "CSE" },
    { code: "WDD 130", completed: true, class: "WDD" },
    { code: "CSE 111", completed: true, class: "CSE" },
    { code: "CSE 210", completed: false, class: "CSE" },
    { code: "WDD 131", completed: true, class: "WDD" },
    { code: "WDD 210", completed: false, class: "WDD" },
  ];

  const courseContainer = document.getElementById("courseCards");
  const showAllButton = document.getElementById("showAll");
  const showWDDButton = document.getElementById("showWDD");
  const showCSEButton = document.getElementById("showCSE");

  function renderCourses(filter = "all") {
    courseContainer.innerHTML = ""; // Clear existing courses

    const filteredCourses = courses.filter((course) => {
      if (filter === "all") return true;
      return course.class === filter;
    });

    filteredCourses.forEach((course) => {
      const courseCard = document.createElement("div");
      courseCard.className = "courseCard";
      courseCard.style.backgroundColor = course.completed
        ? "lightgreen"
        : "white";

      courseCard.innerHTML = `
        <h3>${course.code}</h3>
        <p>Class: ${course.class}</p>
        <p>Status: ${course.completed ? "Completed" : "Incomplete"}</p>
      `;
      courseContainer.appendChild(courseCard);
    });
  }

  showAllButton.addEventListener("click", () => renderCourses("all"));
  showWDDButton.addEventListener("click", () => renderCourses("WDD"));
  showCSEButton.addEventListener("click", () => renderCourses("CSE"));

  // Initial render of all courses
  renderCourses();
});
