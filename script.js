// --- Part 2: Functions with parameters, return values, and scope ---
let globalMessage = "I am a global variable";

function calculateArea(width, height) {
  return width * height;
}

function showCalculation() {
  let localMessage = "I am local to this function";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only here

  const result = calculateArea(10, 5);
  document.getElementById("result").textContent =
    `Area of 10 x 5 rectangle = ${result}`;
}

// Attach function to button
document.getElementById("calcBtn").addEventListener("click", showCalculation);

// --- Part 3: CSS + JS Integration ---
const card = document.querySelector(".card");
const shakeBtn = document.getElementById("shakeBtn");

function triggerShake(element) {
  element.classList.add("shake");
  element.addEventListener("animationend", () => {
    element.classList.remove("shake");
  }, { once: true });
}

shakeBtn.addEventListener("click", () => triggerShake(card));

// Modal logic
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function toggleModal() {
  modal.classList.toggle("show");
}

toggleModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);
