document.addEventListener("DOMContentLoaded", () => {
  const directory = document.querySelector(".directory");
  const directoryList = document.querySelector(".directory-list");
  let isGridView = true;

  async function fetchMembers() {
    try {
      const response = await fetch("data/members.json");
      const members = await response.json();
      displayMembers(members, isGridView);
    } catch (error) {
      console.error(error);
    }
  }
});
