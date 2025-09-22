// Wait for DOM to be ready to avoid null elements
document.addEventListener("DOMContentLoaded", () => {
  // --- helpers & demo functions (Part 2) ---
  let globalMessage = "I am a global variable";

  function calculateArea(width, height) {
    // param validation + return value
    if (typeof width !== "number" || typeof height !== "number") {
      return null;
    }
    return width * height;
  }

  function showCalculation() {
    // local scope example
    let localMessage = "I am local to this function";
    console.log("global:", globalMessage);
    console.log("local:", localMessage);

    const result = calculateArea(10, 5);
    const resultEl = document.getElementById("result");
    if (result === null) {
      resultEl.textContent = "Calculation error";
    } else {
      resultEl.textContent = `Area of 10 × 5 = ${result}`;
    }
  }

  // --- attach calc button safely ---
  const calcBtn = document.getElementById("calcBtn");
  if (calcBtn) {
    calcBtn.addEventListener("click", showCalculation);
  } else {
    console.error("calcBtn not found in DOM");
  }

  // --- shake card ---
  const card = document.getElementById("animatedCard");
  const shakeBtn = document.getElementById("shakeBtn");

  function triggerShake(element) {
    if (!element) return;
    element.classList.add("shake");
    // remove once animation ends (once: true ensures single removal)
    element.addEventListener("animationend", () => {
      element.classList.remove("shake");
    }, { once: true });
  }

  if (shakeBtn) {
    shakeBtn.addEventListener("click", () => {
      triggerShake(card);
    });
  } else {
    console.error("shakeBtn not found in DOM");
  }

  // --- modal open/close (robust) ---
  const modal = document.getElementById("modal");
  const toggleModalBtn = document.getElementById("toggleModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  function openModal() {
    if (!modal) return;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
  function toggleModal() {
    if (!modal) return;
    if (modal.classList.contains("show")) closeModal();
    else openModal();
  }

  if (toggleModalBtn) toggleModalBtn.addEventListener("click", toggleModal);
  else console.error("toggleModalBtn not found");

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  else console.error("closeModalBtn not found");

  // close modal when clicking outside content
  if (modal) {
    modal.addEventListener("click", (ev) => {
      if (ev.target === modal) closeModal();
    });
  }

  // Debug helper: make it easy to see that script ran
  console.log("script.js loaded — event listeners attached (if elements existed)");
});
