document.getElementById("year").textContent = new Date().getFullYear();

const filters = document.querySelectorAll(".filter");
filters.forEach((button) => button.addEventListener("click", () => {
  filters.forEach((filter) => filter.classList.remove("active"));
  button.classList.add("active");

  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = button.dataset.filter === "todos" ||
      card.dataset.category === button.dataset.filter ? "" : "none";
  });
}));
