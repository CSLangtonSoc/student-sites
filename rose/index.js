const button = document.getElementById("button")
button.addEventListener("click", () => {
  alert("Thank you for reading! send feedback to roseswk7@gmail.com.")
})

const app = document.getElementById("app")
const correctPassword = "Turtle"
let password = ""

while (password !== correctPassword) {
  password = prompt("Enter your password:")
}
app.style.display = "block"
console.log("Access granted")
