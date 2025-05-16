function changeText() {
  document.getElementById("main-title").textContent = "Text Changed with JavaScript!";
}

function changeStyle() {
  const intro = document.getElementById("intro-text");
  intro.style.color = "white";
  intro.style.backgroundColor = "#333";
  intro.style.padding = "10px";
  intro.style.borderRadius = "8px";
}

function addElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "This paragraph was added dynamically.";
  newPara.id = "dynamic-paragraph";
  document.getElementById("dynamic-container").appendChild(newPara);
}

function removeElement() {
  const para = document.getElementById("dynamic-paragraph");
  if (para) {
    para.remove();
  }
}
