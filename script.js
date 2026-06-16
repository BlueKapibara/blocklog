let curlang = "py";
function lanvanish() {
  alert(
    "Zmieniono język programowania. Niezapisane zmiany mogą zostać utracone.",
  );
  workspace.clear();
  workspace.clearUndo();
  workspace.trashcan.emptyContents();
};

console.log("Working");

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

document.addEventListener("click", function (event) {
  const py = document.getElementById("py");
  const js = document.getElementById("js");

  if (py.contains(event.target)) {
    event.preventDefault();
    if (curlang !== "py") {
      lanvanish();
    }
    curlang = "py";
    document.getElementById("proglandis").src =
      "../../multimedia/ikony/pythonicon.png";
  } else if (js.contains(event.target)) {
    event.preventDefault();
    if (curlang !== "js") {
      lanvanish();
    }
    curlang = "js";
    document.getElementById("proglandis").src =
      "../../multimedia/ikony/jsicon.png";
  }
});
