
document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-btn");
    const menu = dropdown.querySelector(".menu");

    const clickedInside = dropdown.contains(event.target);

    if (button.contains(event.target)) {
      event.preventDefault();
      menu.classList.toggle("show");
    } else if (!clickedInside) {
      menu.classList.remove("show");
    }
  });
});

