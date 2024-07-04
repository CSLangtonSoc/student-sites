const button = document.getElementById("button");
const label = document.getElementById("counter");

let counter = 0;

button.addEventListener("click", () => {
  counter += 1;
  label.innerText = counter;
})
