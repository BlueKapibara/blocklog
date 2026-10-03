let curlang = "blocks";
let curlang2 = "py2";
let lanmode = "python";

console.log("Working");

const editor = CodeMirror.fromTextArea(document.getElementById("codearea"), {
  mode: lanmode,
  lineNumbers: true,
  indentUnit: 4,
  tabSize: 4,
  lineWrapping: false,
});

document.addEventListener("click", function (event) {
  const py = document.getElementById("py");
  const js = document.getElementById("js");
  const py2 = document.getElementById("py2");
  const js2 = document.getElementById("js2");
  const blocks = document.getElementById("blocks");
  const blocks2 = document.getElementById("blocks2");
  const reveBtn = document.getElementById("reveBtn");

  const blocklydiv = document.getElementById("blocklyDiv");
  const codearea = document.querySelector(".CodeMirror");

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
    lanmode = "python";
    editor.setOption("mode", "python"); // 2. Dynamicznie zmieniamy tryb edytora!,
  } else if (curlang === "js") {
    document.getElementById("proglandis").src =
      "../../multimedia/ikony/jsicon.png";
    lanmode = "javascript";
    editor.setOption("mode", "javascript"); // 2. Dynamicznie zmieniamy tryb edytora!
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

  if (curlang === "blocks") {
    blocklydiv.style.display = "block";
    codearea.style.display = "none";
  } else {
    blocklydiv.style.display = "none";
    codearea.style.display = "block";
  }
});
