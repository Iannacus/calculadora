const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let value = "";

function escuchando(e) {
  console.log(e.target.value);
  value += e.target.textContent;
  display.textContent = value;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", escuchando);
}
