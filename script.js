let curlang = "blocks";
let curlang2 = "py2";
function lanvanish() {
  workspace.clear();
  workspace.clearUndo();
  workspace.trashcan.emptyContents();
}

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
  const py2 = document.getElementById("py2");
  const js2 = document.getElementById("js2");
  const blocks = document.getElementById("blocks");
  const blocks2 = document.getElementById("blocks2");
  const reveBtn = document.getElementById("reveBtn");

  if (py.contains(event.target)) {
    event.preventDefault();
    if (curlang2 !== "py") {
      curlang = "py";
    }
  } else if (js.contains(event.target)) {
    event.preventDefault();
    if (curlang2 !== "js") {
      curlang = "js";
    }
  } else if (blocks.contains(event.target)) {
    event.preventDefault();
    if (curlang !== "blocks") {
      curlang = "blocks";
    }
  }
  if (py2.contains(event.target)) {
    event.preventDefault();
    if (curlang !== "py2") {
      curlang2 = "py2";
    }
  } else if (js2.contains(event.target)) {
    event.preventDefault();
    if (curlang !== "js2") {
      curlang2 = "js2";
    }
  } else if (blocks2.contains(event.target)) {
    event.preventDefault();
    if (curlang !== "blocks2") {
      curlang2 = "blocks2";
    }
  }
  if (reveBtn.contains(event.target)) {
    event.preventDefault();
    let acurlang = curlang + "2";
    let acurlang2 = curlang2.replace("2", "");
    curlang = acurlang2;
    curlang2 = acurlang;
    console.log(curlang + " = " + curlang2);
  }

  if (curlang === "blocks") {
    document.getElementById("proglandis").src =
      "../../multimedia/ikony/blocklyicon.png";
  } else if (curlang === "py") {
    document.getElementById("proglandis").src =
      "../../multimedia/ikony/pythonicon.png";
  } else if (curlang === "js") {
    document.getElementById("proglandis").src =
      "../../multimedia/ikony/jsicon.png";
  }
  if (curlang2 === "blocks2") {
    document.getElementById("proglandis2").src =
      "../../multimedia/ikony/blocklyicon.png";
  } else if (curlang2 === "py2") {
    document.getElementById("proglandis2").src =
      "../../multimedia/ikony/pythonicon.png";
  } else if (curlang2 === "js2") {
    document.getElementById("proglandis2").src =
      "../../multimedia/ikony/jsicon.png";
  }
});
